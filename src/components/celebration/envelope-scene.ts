import * as THREE from 'three';
import { gsap } from 'gsap';

import { ENVELOPE, FLORAL, PETAL_COLORS } from './palette';

type EnvelopeSceneOptions = {
  canvas: HTMLCanvasElement;
  backdrop: HTMLElement;
  chrome: HTMLElement[];
  hint: HTMLElement;
  autoOpenAfter: number;
  onOpened: () => void;
  onFaded: () => void;
  onFinished: () => void;
};

export type EnvelopeScene = {
  open: () => void;
  dispose: () => void;
};

const W = 4;
const H = 2.7;
const FLAP_DEPTH = H * 0.58;
const LETTER_W = W * 0.9;
const LETTER_H = H * 0.9;
const LETTER_RISE = H * 0.62;
const PETAL_LIMIT = 130;
const PETAL_SECONDS = 8;

const rand = (min: number, max: number): number => min + Math.random() * (max - min);

const waitForFonts = (fonts: string[]): Promise<unknown> => {
  if (!document.fonts) return Promise.resolve();
  const loaded = Promise.all(fonts.map((font) => document.fonts.load(font)));
  return Promise.race([loaded, new Promise((resolve) => window.setTimeout(resolve, 1500))]);
};

const makeCanvas = (width: number, height: number) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return { canvas, ctx: canvas.getContext('2d') as CanvasRenderingContext2D };
};

// Canvas letterSpacing isn't in every Safari yet, so space the label by hand.
const fillSpacedText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  centerX: number,
  y: number,
  spacing: number
): void => {
  const chars = Array.from(text);
  const widths = chars.map((char) => ctx.measureText(char).width);
  const total = widths.reduce((sum, width) => sum + width, 0) + spacing * (chars.length - 1);
  let cursor = centerX - total / 2;
  ctx.textAlign = 'left';
  chars.forEach((char, i) => {
    ctx.fillText(char, cursor, y);
    cursor += widths[i] + spacing;
  });
};

const drawSprig = (ctx: CanvasRenderingContext2D, x: number, y: number, scale: number): void => {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.strokeStyle = FLORAL.stem;
  ctx.lineWidth = 2.2;
  ctx.lineCap = 'round';
  [-1, 1].forEach((side) => {
    ctx.beginPath();
    ctx.moveTo(side * 14, 0);
    ctx.bezierCurveTo(side * 30, 6, side * 60, -6, side * 122, 4);
    ctx.stroke();
    [40, 62, 86, 106].forEach((distance, i) => {
      const up = i % 2 === 0;
      ctx.save();
      ctx.translate(side * distance, up ? -1 : 1);
      ctx.rotate(side === 1 ? (up ? -0.6 : 0.6) : Math.PI + (up ? 0.6 : -0.6));
      ctx.fillStyle = up ? FLORAL.leaf : FLORAL.sage;
      ctx.beginPath();
      ctx.ellipse(11, 0, 11, 4, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  });
  ctx.fillStyle = FLORAL.blush;
  for (let i = 0; i < 5; i += 1) {
    ctx.save();
    ctx.rotate((i * Math.PI * 2) / 5);
    ctx.beginPath();
    ctx.ellipse(0, -8, 6, 9, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  ctx.fillStyle = FLORAL.navy;
  ctx.beginPath();
  ctx.arc(0, 0, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
};

const drawLetter = (): HTMLCanvasElement => {
  const width = 1600;
  const height = Math.round(width * (LETTER_H / LETTER_W));
  const { canvas, ctx } = makeCanvas(width, height);
  ctx.fillStyle = ENVELOPE.paper;
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = ENVELOPE.paperEdge;
  ctx.lineWidth = 4;
  ctx.strokeRect(40, 40, width - 80, height - 80);
  drawSprig(ctx, width / 2, 170, 1.7);
  ctx.fillStyle = ENVELOPE.ink;
  ctx.textAlign = 'center';
  ctx.font = 'italic 600 150px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('You’re invited', width / 2, 370);
  ctx.fillStyle = ENVELOPE.label;
  ctx.font = '700 38px Nunito, Helvetica, sans-serif';
  fillSpacedText(ctx, 'TO A NAMING CEREMONY', width / 2, 460, 10);
  return canvas;
};

const drawMonogram = (): HTMLCanvasElement => {
  const { canvas, ctx } = makeCanvas(512, 512);
  ctx.strokeStyle = 'rgba(251, 237, 234, 0.55)';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(256, 256, 206, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = ENVELOPE.sealText;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'italic 600 190px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('A&P', 256, 268);
  return canvas;
};

const drawAddress = (): HTMLCanvasElement => {
  const { canvas, ctx } = makeCanvas(1200, 220);
  ctx.fillStyle = ENVELOPE.ink;
  ctx.globalAlpha = 0.85;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'italic 500 104px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('Adeola & Precious', 600, 112);
  return canvas;
};

const drawLiner = (): HTMLCanvasElement => {
  const { canvas, ctx } = makeCanvas(256, 256);
  ctx.fillStyle = ENVELOPE.liner;
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle = ENVELOPE.linerDot;
  [
    [64, 64],
    [192, 192],
  ].forEach(([x, y]) => {
    for (let i = 0; i < 5; i += 1) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((i * Math.PI * 2) / 5);
      ctx.beginPath();
      ctx.ellipse(0, -9, 6, 9, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  });
  return canvas;
};

const roundedRect = (width: number, height: number, radius: number) => {
  const shape = new THREE.Shape();
  const x = -width / 2;
  const y = -height / 2;
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return shape;
};

const polygon = (points: number[][]) => {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  points.slice(1).forEach(([x, y]) => shape.lineTo(x, y));
  shape.closePath();
  return shape;
};

const visibleHeightAt = (camera, depth: number): number =>
  2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * Math.abs(camera.position.z - depth);

export async function createEnvelopeScene(options: EnvelopeSceneOptions): Promise<EnvelopeScene> {
  const { canvas, backdrop, chrome, hint, autoOpenAfter, onOpened, onFaded, onFinished } = options;

  await waitForFonts([
    'italic 600 150px "Cormorant Garamond"',
    'italic 500 104px "Cormorant Garamond"',
    '700 38px Nunito',
  ]);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.autoClear = false;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  const toTexture = (source: HTMLCanvasElement) => {
    const texture = new THREE.CanvasTexture(source);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    return texture;
  };

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  scene.add(new THREE.HemisphereLight(0xfffaf3, 0xf1e3da, 2.1));
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
  keyLight.position.set(-4, 6, 10);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(2048, 2048);
  keyLight.shadow.radius = 4;
  keyLight.shadow.bias = -0.0005;
  keyLight.shadow.normalBias = 0.02;
  Object.assign(keyLight.shadow.camera, {
    left: -6,
    right: 6,
    top: 6,
    bottom: -6,
    near: 1,
    far: 30,
  });
  scene.add(keyLight);

  const fadeMaterials = [];
  const standard = (color: string, extra = {}) => {
    const material = new THREE.MeshStandardMaterial({ color, roughness: 0.92, ...extra });
    fadeMaterials.push(material);
    return material;
  };
  // Only the moving parts cast shadows, so the flap and seal shade the paper as they lift.
  const mesh = (geometry, material, z: number, castShadow = false) => {
    const item = new THREE.Mesh(geometry, material);
    item.position.z = z;
    item.castShadow = castShadow;
    item.receiveShadow = true;
    return item;
  };

  const rig = new THREE.Group();
  const envelope = new THREE.Group();
  rig.add(envelope);
  scene.add(rig);

  envelope.add(
    mesh(new THREE.ShapeGeometry(roundedRect(W, H, 0.05)), standard(ENVELOPE.inside), 0)
  );

  const letter = mesh(
    new THREE.PlaneGeometry(LETTER_W, LETTER_H),
    standard('#ffffff', { map: toTexture(drawLetter()), roughness: 0.95 }),
    0.04,
    true
  );
  letter.position.y = -H * 0.02;
  envelope.add(letter);

  const pocketApex = -H * 0.06;
  envelope.add(
    mesh(
      new THREE.ShapeGeometry(
        polygon([
          [-W / 2, H / 2],
          [-W / 2, -H / 2],
          [0.05, pocketApex],
        ])
      ),
      standard(ENVELOPE.side),
      0.08
    ),
    mesh(
      new THREE.ShapeGeometry(
        polygon([
          [W / 2, H / 2],
          [W / 2, -H / 2],
          [-0.05, pocketApex],
        ])
      ),
      standard(ENVELOPE.side),
      0.08
    ),
    mesh(
      new THREE.ShapeGeometry(
        polygon([
          [-W / 2, -H / 2],
          [W / 2, -H / 2],
          [0, H * 0.04],
        ])
      ),
      standard(ENVELOPE.bottom),
      0.1
    )
  );

  const foldMaterial = new THREE.LineBasicMaterial({ color: ENVELOPE.fold });
  fadeMaterials.push(foldMaterial);
  const fold = (points: number[][], z: number) =>
    new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(points.map(([x, y]) => new THREE.Vector3(x, y, z))),
      foldMaterial
    );
  envelope.add(
    fold(
      [
        [-W / 2, H / 2],
        [0.05, pocketApex],
      ],
      0.09
    ),
    fold(
      [
        [W / 2, H / 2],
        [-0.05, pocketApex],
      ],
      0.09
    ),
    fold(
      [
        [-W / 2, -H / 2],
        [0, H * 0.04],
        [W / 2, -H / 2],
      ],
      0.11
    )
  );

  const address = new THREE.Mesh(
    new THREE.PlaneGeometry(W * 0.48, W * 0.48 * (220 / 1200)),
    new THREE.MeshBasicMaterial({ map: toTexture(drawAddress()), transparent: true })
  );
  fadeMaterials.push(address.material);
  address.position.set(0, -H * 0.33, 0.12);
  envelope.add(address);

  const flapShape = new THREE.Shape();
  flapShape.moveTo(-W / 2, 0);
  flapShape.lineTo(W / 2, 0);
  flapShape.lineTo(0.2, -FLAP_DEPTH + 0.06);
  flapShape.quadraticCurveTo(0, -FLAP_DEPTH - 0.02, -0.2, -FLAP_DEPTH + 0.06);
  flapShape.closePath();
  const flapGeometry = new THREE.ShapeGeometry(flapShape);
  const linerTexture = toTexture(drawLiner());
  linerTexture.wrapS = THREE.RepeatWrapping;
  linerTexture.wrapT = THREE.RepeatWrapping;
  linerTexture.repeat.set(1.4, 1.4);
  const flap = new THREE.Group();
  flap.position.set(0, H / 2, 0.14);
  flap.add(
    mesh(flapGeometry, standard(ENVELOPE.flap, { side: THREE.FrontSide }), 0, true),
    mesh(flapGeometry, standard('#ffffff', { map: linerTexture, side: THREE.BackSide }), 0, true)
  );
  envelope.add(flap);

  const sealShape = new THREE.Shape();
  for (let i = 0; i <= 72; i += 1) {
    const angle = (i / 72) * Math.PI * 2;
    const radius = 0.36 * (1 + 0.05 * Math.sin(angle * 5) + 0.03 * Math.sin(angle * 9 + 1));
    const point = [Math.cos(angle) * radius, Math.sin(angle) * radius];
    if (i === 0) sealShape.moveTo(point[0], point[1]);
    else sealShape.lineTo(point[0], point[1]);
  }
  const seal = new THREE.Group();
  seal.position.set(0, H / 2 - FLAP_DEPTH, 0.2);
  seal.add(
    mesh(
      new THREE.ExtrudeGeometry(sealShape, {
        depth: 0.05,
        bevelEnabled: true,
        bevelThickness: 0.035,
        bevelSize: 0.035,
        bevelSegments: 4,
      }),
      standard(ENVELOPE.seal, { roughness: 0.38, metalness: 0.05 }),
      0,
      true
    ),
    mesh(
      new THREE.CircleGeometry(0.27, 48),
      standard('#ffffff', { map: toTexture(drawMonogram()), transparent: true, roughness: 0.5 }),
      0.088
    )
  );
  envelope.add(seal);

  const petalScene = new THREE.Scene();
  const petalCamera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  petalCamera.position.z = 10;
  petalScene.add(new THREE.HemisphereLight(0xffffff, 0xfbefe8, 2.8));
  const petalLight = new THREE.DirectionalLight(0xffffff, 0.9);
  petalLight.position.set(-3, 5, 6);
  petalScene.add(petalLight);

  const petalShape = new THREE.Shape();
  petalShape.moveTo(0, -0.11);
  petalShape.bezierCurveTo(0.095, -0.05, 0.085, 0.08, 0, 0.12);
  petalShape.bezierCurveTo(-0.085, 0.08, -0.095, -0.05, 0, -0.11);
  const petalGeometry = new THREE.ShapeGeometry(petalShape, 10);
  const petalPositions = petalGeometry.attributes.position;
  for (let i = 0; i < petalPositions.count; i += 1) {
    const x = petalPositions.getX(i);
    petalPositions.setZ(i, x * x * 2.4);
  }
  petalGeometry.computeVertexNormals();
  const petals = new THREE.InstancedMesh(
    petalGeometry,
    new THREE.MeshStandardMaterial({ roughness: 0.8, side: THREE.DoubleSide }),
    PETAL_LIMIT
  );
  for (let i = 0; i < PETAL_LIMIT; i += 1) {
    petals.setColorAt(i, new THREE.Color(PETAL_COLORS[i % PETAL_COLORS.length]));
  }
  petals.visible = false;
  petalScene.add(petals);

  const petalState = Array.from({ length: PETAL_LIMIT }, () => ({
    position: new THREE.Vector3(),
    velocity: new THREE.Vector3(),
    rotation: new THREE.Euler(),
    spin: new THREE.Vector3(),
    sway: 0,
    swayRate: 0,
    phase: 0,
    scale: 1,
    terminal: 1.5,
  }));
  const dummy = new THREE.Object3D();

  let width = 1;
  let height = 1;
  let opened = false;
  let petalsActive = false;
  let petalTime = 0;
  let elapsed = 0;
  let frame = 0;
  const idle = { amount: 1 };
  const fade = { value: 1 };
  let lastFrame = performance.now();
  const tweens = [];

  const resize = () => {
    width = canvas.clientWidth || window.innerWidth;
    height = canvas.clientHeight || window.innerHeight;
    renderer.setSize(width, height, false);
    const aspect = width / height;
    [camera, petalCamera].forEach((item) => {
      Object.assign(item, { aspect });
      item.updateProjectionMatrix();
    });
    if (!opened) {
      const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      const neededHeight = Math.max(W / 0.78 / aspect, H * 2.3);
      camera.position.set(0, 0, neededHeight / 2 / tanHalf);
    }
  };

  const launchPetals = () => {
    const visibleHeight = visibleHeightAt(petalCamera, 0);
    const visibleWidth = visibleHeight * petalCamera.aspect;
    // Burst from wherever the letter sits on screen, mapped into the petal camera's space.
    const letterScreenY =
      letter.getWorldPosition(new THREE.Vector3()).y / (visibleHeightAt(camera, 0) / 2);
    const burstY = (letterScreenY * visibleHeight) / 2;
    petals.count = petalCamera.aspect < 1 ? 64 : PETAL_LIMIT;
    petalState.forEach((petal, i) => {
      if (i < petals.count * 0.4) {
        const angle = rand(0, Math.PI * 2);
        const speed = rand(2.5, 6);
        petal.position.set(rand(-0.4, 0.4), burstY + rand(-0.3, 0.3), rand(0, 1.5));
        petal.velocity.set(
          Math.cos(angle) * speed,
          Math.abs(Math.sin(angle)) * speed * 0.9 + 1.5,
          rand(-1, 1)
        );
      } else {
        petal.position.set(
          rand(-visibleWidth / 2, visibleWidth / 2),
          visibleHeight / 2 + rand(0.2, visibleHeight * 0.5),
          rand(-1.5, 2)
        );
        petal.velocity.set(0, -rand(0.6, 1.2), 0);
      }
      petal.rotation.set(rand(0, 6.28), rand(0, 6.28), rand(0, 6.28));
      petal.spin.set(rand(-3, 3), rand(-3, 3), rand(-2, 2));
      petal.sway = rand(0.4, 1);
      petal.swayRate = rand(1.2, 2.4);
      petal.phase = rand(0, 6.28);
      petal.scale = rand(0.8, 1.35);
      petal.terminal = rand(1.4, 2.4);
    });
    petals.visible = true;
    petalsActive = true;
  };

  const finish = () => {
    if (!petalsActive) return;
    petalsActive = false;
    tweens.push(gsap.to(canvas, { opacity: 0, duration: 0.5, onComplete: onFinished }));
  };

  const updatePetals = (delta: number) => {
    if (!petalsActive) return;
    petalTime += delta;
    const bottom = -visibleHeightAt(petalCamera, 0) / 2 - 0.6;
    let falling = 0;
    for (let i = 0; i < petals.count; i += 1) {
      const petal = petalState[i];
      petal.velocity.y = Math.max(petal.velocity.y - 5.5 * delta, -petal.terminal);
      petal.velocity.x *= 1 - 1.6 * delta;
      petal.velocity.z *= 1 - 1.6 * delta;
      petal.position.x +=
        (petal.velocity.x + Math.sin(elapsed * petal.swayRate + petal.phase) * petal.sway) * delta;
      petal.position.y += petal.velocity.y * delta;
      petal.position.z += petal.velocity.z * delta;
      petal.rotation.x += petal.spin.x * delta;
      petal.rotation.y += petal.spin.y * delta;
      petal.rotation.z += petal.spin.z * delta;
      if (petal.position.y > bottom) falling += 1;
      dummy.position.copy(petal.position);
      dummy.rotation.copy(petal.rotation);
      dummy.scale.setScalar(petal.scale);
      dummy.updateMatrix();
      petals.setMatrixAt(i, dummy.matrix);
    }
    petals.instanceMatrix.needsUpdate = true;
    if (falling === 0 || petalTime > PETAL_SECONDS) finish();
  };

  const render = () => {
    const now = performance.now();
    const delta = Math.min((now - lastFrame) / 1000, 0.05);
    lastFrame = now;
    elapsed += delta;
    rig.rotation.x = Math.sin(elapsed * 0.9) * 0.05 * idle.amount;
    rig.rotation.y = Math.sin(elapsed * 0.7) * 0.09 * idle.amount;
    rig.position.y = Math.sin(elapsed * 1.2) * 0.06 * idle.amount;
    updatePetals(delta);
    renderer.clear();
    if (rig.visible) renderer.render(scene, camera);
    if (petals.visible) {
      renderer.clearDepth();
      renderer.render(petalScene, petalCamera);
    }
    frame = window.requestAnimationFrame(render);
  };

  envelope.position.y = 5;
  envelope.rotation.z = -0.3;
  const intro = gsap
    .timeline()
    .to(envelope.position, { y: 0, duration: 1.2, ease: 'expo.out' }, 0)
    .to(envelope.rotation, { z: 0, duration: 1.6, ease: 'elastic.out(1, 0.5)' }, 0);
  const hintIn = gsap.to(hint, { opacity: 1, duration: 0.6, delay: 0.8 });
  tweens.push(intro, hintIn);

  const open = () => {
    if (opened) return;
    opened = true;
    // A tap during the drop-in waits for the envelope to land before breaking the seal.
    const timeline = gsap.timeline({ delay: Math.max(0, 0.9 - intro.time()) });
    tweens.push(timeline);
    hintIn.kill();
    timeline
      .to([...chrome, hint], { opacity: 0, duration: 0.3, ease: 'power1.out' }, 0)
      .to(idle, { amount: 0, duration: 0.5, ease: 'power2.out' }, 0)
      .to(seal.scale, { x: 1.18, y: 1.18, z: 1.18, duration: 0.14, ease: 'power2.out' }, 0)
      .to(seal.scale, { x: 0.001, y: 0.001, z: 0.001, duration: 0.3, ease: 'back.in(2)' }, 0.14)
      .to(seal.rotation, { z: 0.8, duration: 0.44, ease: 'power2.in' }, 0)
      .to(flap.rotation, { x: -Math.PI, duration: 0.8, ease: 'power3.inOut' }, 0.3)
      .set(flap.position, { z: -0.02 }, 1.1)
      .to(letter.position, { y: LETTER_RISE - H * 0.02, duration: 0.9, ease: 'power3.out' }, 0.95)
      // Lift the letter out of the envelope so the envelope can fall away on its own.
      .add(() => rig.attach(letter), 1.72)
      .to(envelope.position, { y: -7, duration: 0.85, ease: 'power3.in' }, 1.75)
      .to(envelope.rotation, { z: 0.14, duration: 0.85, ease: 'power2.in' }, 1.75)
      .to(letter.position, { y: '+=0.4', duration: 1.1, ease: 'power2.out' }, 1.75)
      .to(letter.scale, { x: 1.12, y: 1.12, duration: 1.1, ease: 'power2.out' }, 1.75)
      .add(onOpened, 1.95)
      .add(launchPetals, 2)
      .add(() => {
        fadeMaterials.forEach((material) => {
          Object.assign(material, { transparent: true, needsUpdate: true });
        });
      }, 2)
      .to(
        fade,
        {
          value: 0,
          duration: 0.7,
          ease: 'power1.inOut',
          onUpdate: () => {
            fadeMaterials.forEach((material) => {
              Object.assign(material, { opacity: fade.value });
            });
          },
        },
        2
      )
      .to(backdrop, { opacity: 0, duration: 0.7, ease: 'power1.inOut' }, 2)
      .add(() => {
        rig.visible = false;
        onFaded();
      }, 2.75);
  };

  resize();
  window.addEventListener('resize', resize);
  render();

  tweens.push(gsap.delayedCall(autoOpenAfter, open));

  const dispose = () => {
    window.cancelAnimationFrame(frame);
    window.removeEventListener('resize', resize);
    tweens.forEach((tween) => tween.kill());
    [scene, petalScene].forEach((root) => {
      root.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.filter(Boolean).forEach((material) => {
          if (material.map) material.map.dispose();
          material.dispose();
        });
      });
    });
    renderer.dispose();
    renderer.forceContextLoss();
  };

  return { open, dispose };
}

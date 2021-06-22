/* eslint-disable @typescript-eslint/no-unused-vars */
function generateArtPosts(list) {
  return list.map((listItem) => ({
    sys: {
      id: listItem.sys.id,
      created: listItem.sys.createdAt,
      updated: listItem.sys.updatedAt,
    },
    fields: {
      title: listItem.fields.title,
      imageUrl: listItem.fields.imageUrl,
      description: listItem.fields.description,
      slug: listItem.fields.slug,
      tags: listItem.fields.tags,
    },
  }));
}

function generateNotePosts(list) {
  return list.map((listItem) => ({
    sys: {
      id: listItem.sys.id,
      created: listItem.sys.createdAt,
      updated: listItem.sys.updatedAt,
    },
    fields: {
      title: listItem.fields.title,
      subtitle: listItem.fields.subtitle,
      slug: listItem.fields.slug,
      imageLink: listItem.fields.imageLink || null,
      tags: listItem.fields.tags,
      body: listItem.fields.body || null,
      backdropColor: listItem.fields.backdropColor || null,
      author: listItem.fields.author || null,
      imageWidth: listItem.fields.imageWidth || null,
      imageHeight: listItem.fields.imageHeight || null,
    },
  }));
}

function generateProjectPosts(list) {
  return list.map((listItem) => ({
    sys: {
      id: listItem.sys.id,
      created: listItem.sys.createdAt,
      updated: listItem.sys.updatedAt,
    },
    fields: {
      title: listItem.fields.title,
      subtitle: listItem.fields.subtitle,
      slug: listItem.fields.slug,
      imageLink: listItem.fields.imageLink,
      body: listItem.fields.body || null,
      stack: listItem.fields.stack,
      githubLink: listItem.fields.githubLink || null,
      liveLink: listItem.fields.liveLink,
      projectType: listItem.fields.projectType,
      descriptionImage: listItem.fields.descriptionImage || null,
    },
  }));
}

module.exports = {
  generateArtPosts,
  generateNotePosts,
  generateProjectPosts,
};

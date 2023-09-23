import path from 'path';

async function projectPages({ graphql, actions }) {
  const projectTemplate = path.resolve('./src/templates/Project.js');

  const { data } = await graphql(`
    query {
      projects: allSanityProject {
        nodes {
          projectTitle
          slug {
            current
          }
        }
      }
    }
  `);
  data.projects.nodes.forEach((project) => {
    actions.createPage({
      path: `project/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await projectPages(params);
}

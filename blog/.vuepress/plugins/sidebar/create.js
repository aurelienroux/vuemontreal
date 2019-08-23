module.exports = filesExtractedDatas => {
  let sidebar = [];
  let firstItem = null;

  let i = 0;

  filesExtractedDatas.map(page => {
    i++;
    let normalizeName = page.relativePath.split("/")[1].split(".")[0];
    if (i === 1) {
      firstItem = normalizeName;
    } else {
      sidebar.push([normalizeName, normalizeName]);
    }
  });

  console.log("je suis la", sidebar);

  const navBarAddition = {
    text: "Archives",
    link: "/archives/" + sidebar[0][0]
  };

  const Events = {
    text: "Events",
    link: "/events/index.html"
  };

  return {
    name: "docgen-enhancer",
    content: `
          export default ({
            Vue, // the version of Vue being used in the VuePress app
            options, // the options for the root Vue instance
            router, // the router instance for the app
            siteData // site metadata
          }) => {
            
            const sidebar = ${JSON.stringify(sidebar)};
            const navBarAddition = ${JSON.stringify(navBarAddition)}
            const events = ${JSON.stringify(Events)}
            if (!siteData.themeConfig['sidebar']) siteData.themeConfig['sidebar'] = {}
            siteData.themeConfig.sidebar['/archives/'] = sidebar
            siteData.themeConfig.nav = []
            siteData.themeConfig.nav.push(events);
            siteData.themeConfig.nav.push(navBarAddition);

            console.log(siteData);
          }
        `
  };
};
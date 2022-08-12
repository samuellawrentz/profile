var Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'title',
        message: '\nBlog Title: ',
        default: 'New Blog',
      },
      {
        type: 'input',
        name: 'path',
        message: '\npermalink:',
        default: 'blog/new-blog/',
      },
      {
        type: 'input',
        name: 'desc',
        message: '\ndescription: ',
      },
      {
        type: 'input',
        name: 'heroimage',
        message: '\nheroimage: ',
      },
      {
        type: 'input',
        name: 'tags',
        message: '\ntags: ',
      },
    ]).then(
      function (ans) {
        const datestring = (new Date()).toISOString().split('T')[0]


        // Write react component
        this.fs.copyTpl(
          this.templatePath('post.ejs'),
          this.destinationPath(`blog/${ans.title.toLowerCase().replace(/[\s']/gi, '-')}/post.mdx`),
          {...ans, date: datestring},
        )
      }.bind(this),
    )
  }
}

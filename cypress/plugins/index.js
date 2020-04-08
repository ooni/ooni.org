/// <reference types="cypress" />

const { lstatSync, existsSync, readdirSync, writeFileSync } = require('fs')
const { join } = require('path')
const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // We only care about directories which have in them an index.html
  const postDirs = getDirectories('public/post/').filter(path => existsSync(join(path, 'index.html')))
  config.env.allPosts = JSON.stringify(postDirs.map(name => name.replace('public/', '/')))
  return config
}

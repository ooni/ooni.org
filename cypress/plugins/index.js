/// <reference types="cypress" />

const { lstatSync, readdirSync, writeFileSync } = require('fs')
const { join } = require('path')
const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  config.env.allPosts = JSON.stringify(getDirectories('public/post/').map(name => name.replace('public/', '/')))
  return config
}

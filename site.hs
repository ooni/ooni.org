--------------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
import Data.Monoid (mappend)
import Hakyll

--------------------------------------------------------------------------------
main :: IO ()
main = hakyll $ do
  match ("css/**" .||. "fonts/**" .||. "images/**" .||. "blog/*/**") $ do
    route   idRoute
    compile copyFileCompiler

  match "*.html" $ do
    route   idRoute
    compile copyFileCompiler

  match "blog/*.rst" $ do
    route   $ setExtension "html"
    compile $ pandocCompiler
      >>= return . fmap demoteHeaders
      >>= loadAndApplyTemplate "templates/blog-post.html"     defaultContext
      >>= loadAndApplyTemplate "templates/default.html"       defaultContext

  match "tests/*.rst" $ do
    route   $ setExtension "html"
    compile $ pandocCompiler
      >>= return . fmap demoteHeaders
      >>= loadAndApplyTemplate "templates/documentation.html" defaultContext
      >>= loadAndApplyTemplate "templates/default.html"       defaultContext

  match "templates/*" $ compile templateCompiler


--------------------------------------------------------------------------------
postCtx :: Context String
postCtx =
  dateField "date" "%B %e, %Y" `mappend`
  defaultContext

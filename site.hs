--------------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
import Data.Monoid (mappend)
import Hakyll


--------------------------------------------------------------------------------
main :: IO ()
main = hakyll $ do
  match ("css/**" .||. "fonts/**" .||. "images/**" ) $ do
    route   idRoute
    compile copyFileCompiler

  match "index.html" $ do
    route   idRoute
    compile copyFileCompiler

  match "tests/*.html" $ do
    route   idRoute
    compile $ getResourceBody
      >>= loadAndApplyTemplate "templates/documentation.html" defaultContext
      >>= loadAndApplyTemplate "templates/default.html"       defaultContext

  match "templates/*" $ compile templateCompiler


--------------------------------------------------------------------------------
postCtx :: Context String
postCtx =
  dateField "date" "%B %e, %Y" `mappend`
  defaultContext

#!/bin/sh
OONI_SPEC_REPO_DIR="../ooni-spec/"
cp $OONI_SPEC_REPO_DIR/test-descriptions/*.md content/nettest/
cp $OONI_SPEC_REPO_DIR/informed-consent/data-policy.md content/data-policy/content.md

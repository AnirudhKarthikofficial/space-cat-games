#!/bin/bash
#
# Copyright (c) Starry Systems and Nijika Softworks.
#

echo "Pushing to origin (github...)"
git push origin main -v
echo "Done, pushing to mirror (gitlab)"
git push --force mirror main -v
echo "Done!"
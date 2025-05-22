#!/bin/bash
cd /home/kavia/workspace/code-generation/elephant-insights-exploring-biology-behavior-and-conservation-95252-95266/main_container
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


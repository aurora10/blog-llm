#!/bin/bash

# Define the path to the auth.js file
AUTH_FILE="auth.js"

# Check if the file exists
if [ ! -f "$AUTH_FILE" ]; then
    echo "Error: $AUTH_FILE does not exist."
    exit 1
fi

# Uncomment or comment the Google Provider based on the provided argument
if [ "$1" = "comment" ]; then
    # Comment out the Google Provider
    sed -i.bak '/GoogleProvider({/,/}),/ s/^/\/\/ /' "$AUTH_FILE"
elif [ "$1" = "uncomment" ]; then
    # Uncomment the Google Provider
    sed -i.bak '/GoogleProvider({/,/}),/ s/^\/\/ //' "$AUTH_FILE"
else
    echo "Usage: $0 [comment|uncomment]"
    exit 1
fi

echo "Google Provider has been $1ed in $AUTH_FILE"

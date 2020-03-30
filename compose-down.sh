#!/usr/bin/env sh

dir=$(dirname "$0")
profile="$1"
conf="${dir}/docker-compose.yml"

usage() {
  echo "Usage: $(basename "$0") [profile]"
}

# Définit la config à utiliser
if [ -n "$profile" ]; then
  file="${dir}/docker-compose-${profile}.yml"

  if [ ! -f "$file" ]; then
    echo "file not found: $file"
    exit 1
  fi
  conf="$file"
fi

# Arrête les conteneurs
docker-compose -p proxytimeout -f "$conf" down

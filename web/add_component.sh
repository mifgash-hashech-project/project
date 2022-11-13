#!/usr/bin/env sh


COMPONENT=$1
COMPONENT_LOW=$(echo "$COMPONENT" | awk '{print tolower($0)}')

mkdir -p src/components/$COMPONENT_LOW
mkdir -p src/styles/components/$COMPONENT_LOW
cat <<-EOF > src/components/$COMPONENT_LOW/$COMPONENT.js
import React from 'react'

export default function $COMPONENT() {

    return (
        <div className="${COMPONENT_LOW}__container">

        </div>

    )
}
EOF
cat <<-EOF > src/styles/components/$COMPONENT_LOW/_$COMPONENT.scss
.${COMPONENT_LOW}__container{
  @extend %page;

}
EOF

echo "\n@import './components/$COMPONENT_LOW/$COMPONENT';\n" >>  src/styles/styles.scss

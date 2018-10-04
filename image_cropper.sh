#!/bin/bash

for f in archive/*.png;
  do filename=`basename $f`;
  convert archive/$filename -gravity center -resize 350x240\^ -crop 350x240+0+0 +repage static/$filename
done


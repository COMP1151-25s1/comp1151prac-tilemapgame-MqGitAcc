<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.10" tiledversion="1.11.2" name="tilemap" tilewidth="16" tileheight="16" tilecount="132" columns="12">
 <image source="Tilemap/Tilemap/tilemap.png" width="203" height="186"/>
 <tile id="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
   <object id="2" x="0" y="0" width="16" height="16"/>
   <object id="3" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="33">
  <properties>
   <property name="unity:IsTrigger" value="true"/>
   <property name="unity:layer" value="Hazard"/>
  </properties>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
</tileset>

import * as THREE from "three";
import Thing from "./Thing";

class Ground extends Thing {
  constructor(entity) {
    super(entity);

    let geometry = (this.geometry = new THREE.PlaneGeometry(
      this.scaleFactor,
      this.scaleFactor,
      this.scaleFactor
    ));
    let material = (this.material = new THREE.MeshBasicMaterial({
      color: 0x8bc34a,
      side: THREE.DoubleSide
    }));
    let mesh = (this.mesh = new THREE.Mesh(geometry, material));
    this.add(mesh);
  }
}

export default Ground;

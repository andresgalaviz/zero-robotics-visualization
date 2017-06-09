
/// <reference path="../../CommonImports"/>

import Subsystem = require("../../Subsystem");
import GameManager = require("../../GameManager");
import Helpers = require("../../Helpers");
import Constants = require("../../Constants");

import ResultsModule2017HS = require("../../mappings/Mappings2017HS");
import ResultObject2017HS = ResultsModule2017HS.ResultObject2017HS;

class BaseSubsystem implements Subsystem {
  private baseMesh: THREE.Mesh;

  private baseRadius = Constants.Y2017HS.baseRadius;

  private base: number[];

  private gameManager : GameManager;
  private resObject: ResultObject2017HS;

  constructor(gameManager: GameManager) {
    this.gameManager = gameManager;
  }

  init = () => {
    this.resObject = <ResultObject2017HS> this.gameManager.resObject;
	// this.blueZone = this.resObject.getZone(0);
	// this.redZone = this.resObject.getZone(1);
    this.base = this.resObject.getBase();

	this.blueZone[1] = -1 * this.blueZone[1];
	this.redZone[1] = -1 * this.redZone[1];

	// this.blueMesh = this.setupZone(this.blueZone, 0x0000FF);
    // this.redMesh = this.setupZone(this.redZone, 0xFF0000);
    this.baseMesh = this.setupZone(this.baseMesh, 0x0000FF);
  }

  update = (dt:number, time:number, paused:boolean) => {
  }

  play = (time: number) => {
  }

  togglePause = (paused:boolean, resumeTime:number) => {
  }

  changeSpeed = (speed:number):void => {
  }

  private setupZone = (position: number[], color: number): THREE.Mesh => {
    var geom = new THREE.SphereGeometry(this.baseRadius, 32, 32);
    var material = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.2 
    });
    var mesh = new THREE.Mesh(geom, material);

    this.gameManager.scene.add(mesh);
    mesh.position.fromArray(position);

	console.log(mesh);
    return mesh;
  }
}

export = BaseSubsystem;
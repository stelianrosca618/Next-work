"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import Image1 from "@/public/images/undraw_relaunch_day_902d.svg";
import Image2 from "@/public/images/undraw_visionary_technology_re_jfp7.svg";
import bannerImg from "@/public/imgs/company/aboutUs-banner.png"
import logo from "@/public/imgs/logos/Logo.svg";
import playIco from "@/public/imgs/home/playIco.svg";
import playBtn from "@/public/imgs/Dataforger/playBtn.png";
import missionImg from "@/public/imgs/company/missionImg.png";
import leaderShipImg from "@/public/imgs/company/leaderShip.png";

import teamImg1 from "@/public/imgs/company/Team1.png";
import teamImg2 from "@/public/imgs/company/Team2.png";
import teamImg3 from "@/public/imgs/company/Team3.png";
import teamImg4 from "@/public/imgs/company/Team4.png";
import teamImg5 from "@/public/imgs/company/Team5.png";
import teamImg6 from "@/public/imgs/company/Team6.png";
import teamImg7 from "@/public/imgs/company/Team7.png";
import teamImg8 from "@/public/imgs/company/Team8.png";
import teamImg9 from "@/public/imgs/company/Team9.png";

import angelImg1 from "@/public/imgs/company/angelImg1.png";
import angelImg2 from "@/public/imgs/company/angelImg2.png";
import angelImg3 from "@/public/imgs/company/angelImg3.png";
import angelImg4 from "@/public/imgs/company/angelImg4.png";

import joinUsbaner from "@/public/imgs/company/joinUsBanner.png";

import Mediapopup from "@/components/ui/Mediapopup";
import ScrollDowntxt from "@/components/scrollDowntxt";

import * as THREE from 'three';

import TWEEN from '@tweenjs/tween.js';

//import TWEEN from 'three/addons/libs/tween.module.js';
// import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DSprite } from 'three/examples/jsm/Addons';
import { isThisTypeNode } from "typescript";
// import * as GeometryUtils from 'three/addons/utils/GeometryUtils.js';
// import { Line2 } from 'three/addons/lines/Line2.js';
// import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
// import { LineGeometry } from 'three/addons/lines/LineGeometry.js';

// export const metadata = {
//   title: "Hakkaren - Company",
//   description: "About Us",
// };

export default function Company() {

  const threeRenderef = useRef<any>(null);

  let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: CSS3DRenderer;
  let controls;

  // const particlesTotal = 512;
  const bluePosList = [
    new THREE.Vector3(-1000, -600, -9),
    new THREE.Vector3(-1000, -40, -9),
    new THREE.Vector3(-950, -40, -9),
    new THREE.Vector3(-900, -29, -9),
    new THREE.Vector3(-850, -5, -9),
    new THREE.Vector3(-800, 27, -9),
    new THREE.Vector3(-750, 67, -9),
    new THREE.Vector3(-700, 95, -9),
    new THREE.Vector3(-650, 105, -9),
    new THREE.Vector3(-600, 100, -9),
    new THREE.Vector3(-550, 77, -9),
    new THREE.Vector3(-500, 22, -9),
    new THREE.Vector3(-450, -41, -9),
    new THREE.Vector3(-400, -84, -9),
    new THREE.Vector3(-350, -105, -9),
    new THREE.Vector3(-300, -104, -9),
    new THREE.Vector3(-250, -86, -9),
    new THREE.Vector3(-200, -51, -9),
    new THREE.Vector3(-150, 0, -9),
    new THREE.Vector3(-100, 53, -9),
    new THREE.Vector3(-50, 78, -9),
    new THREE.Vector3(0, 85, -9),
    new THREE.Vector3(50, 77, -9),
    new THREE.Vector3(100, 57, -9),
    new THREE.Vector3(150, 23, -9),
    new THREE.Vector3(200, -21, -9),
    new THREE.Vector3(250, -62, -9),
    new THREE.Vector3(300, -81, -9),
    new THREE.Vector3(350, -78, -9),
    new THREE.Vector3(400, -63, -9),
    new THREE.Vector3(450, -41, -9),
    new THREE.Vector3(500, -15, -9),
    new THREE.Vector3(550, 15, -9),
    new THREE.Vector3(600, 43, -9),
    new THREE.Vector3(650, 65, -9),
    new THREE.Vector3(700, 79, -9),
    new THREE.Vector3(750, 83, -9),
    new THREE.Vector3(800, 75, -9),
    new THREE.Vector3(850, 56, -9),
    new THREE.Vector3(900, 20, -9),
    new THREE.Vector3(950, -65, -9),
    new THREE.Vector3(1000, -600, -9),
  ];

  const yellowPosList = [
    new THREE.Vector3(-1000, -600, -10),
    new THREE.Vector3(-1000, -75, -10),
    new THREE.Vector3(-950, -81, -10),
    new THREE.Vector3(-900, -92, -10),
    new THREE.Vector3(-850, -94, -10),
    new THREE.Vector3(-800, -80, -10),
    new THREE.Vector3(-750, -40, -10),
    new THREE.Vector3(-700, -0, -10),
    new THREE.Vector3(-650, 34, -10),
    new THREE.Vector3(-600, 57, -10),
    new THREE.Vector3(-550, 75, -10),
    new THREE.Vector3(-500, 82, -10),
    new THREE.Vector3(-450, 79, -10),
    new THREE.Vector3(-400, 68, -10),
    new THREE.Vector3(-350, 48, -10),
    new THREE.Vector3(-300, 22, -10),
    new THREE.Vector3(-250, -5, -10),
    new THREE.Vector3(-200, -27, -10),
    new THREE.Vector3(-150, -30, -10),
    new THREE.Vector3(-100, -5, -10),
    new THREE.Vector3(-50, 48, -10),
    new THREE.Vector3(0, 100, -10),
    new THREE.Vector3(50, 131, -10),
    new THREE.Vector3(100, 146, -10),
    new THREE.Vector3(150, 143, -10),
    new THREE.Vector3(200, 123, -10),
    new THREE.Vector3(250, 85, -10),
    new THREE.Vector3(300, 28, -10),
    new THREE.Vector3(350, -20, -10),
    new THREE.Vector3(400, -65, -10),
    new THREE.Vector3(450, -93, -10),
    new THREE.Vector3(500, -110, -10),
    new THREE.Vector3(550, -115, -10),
    new THREE.Vector3(600, -108, -10),
    new THREE.Vector3(650, -88, -10),
    new THREE.Vector3(700, -57, -10),
    new THREE.Vector3(750, -32, -10),
    new THREE.Vector3(800, -17, -10),
    new THREE.Vector3(850, -12, -10),
    new THREE.Vector3(900, -19, -10),
    new THREE.Vector3(950, -45, -10),
    new THREE.Vector3(1000, -600, -10),
  ]

  const objects: any[] = [];
  const yellowLineDots: { index: number; ObjData: CSS3DSprite; dotSize: number; }[] = [];
  let currentYellowIndex = 0;
  const blueLineDots: { index: number; ObjData: CSS3DSprite; dotSize: number; }[] = [];
  let currentBlueIndex = 0;

  const effectBorders = [];
  // const blueEffectBorder = [];
  const blueLineEffects: { index: number; ObjData: CSS3DSprite; }[] = [];
  const yellowLineEffects: { index: number; ObjData: CSS3DSprite; }[] = [];
  let dotObj = null;
  let yellowDotObj = null;
  let current = 0;

  const init = () => {
    
    camera = new THREE.PerspectiveCamera(70, 1920 / 600, 1, 100);
    const displayRatio = 1920 / 963;
    
    // camera = new THREE.OrthographicCamera(window.innerWidth / 2, window.innerWidth / -2, window.innerHeight / 2, window.innerHeight / -2, 1, 5000);

    camera.position.set(0, 50, 418);
    camera.lookAt(0, 50, 0);

    scene = new THREE.Scene();
    // Draw Curved Line
    const yellowCurvedLine: HTMLImageElement = document.createElement('img');
    yellowCurvedLine.style.width = '1920px';
    yellowCurvedLine.style.maxWidth = '1920px';
    yellowCurvedLine.addEventListener('load', function () {
      const yellowCurveObj = new CSS3DSprite(yellowCurvedLine);
      yellowCurveObj.position.x = 0;
      yellowCurveObj.position.y = 0;
      yellowCurveObj.position.z = -10;
      scene.add(yellowCurveObj);

    })
    yellowCurvedLine.src = 'imgs/yellowCurveline.svg';
    
    const blueCurvedLine = document.createElement('img');
    blueCurvedLine.style.width = '1920px';
    blueCurvedLine.style.maxWidth = '1920px';
    blueCurvedLine.addEventListener('load', function () {
      const blueCurvedObj = new CSS3DSprite(blueCurvedLine);
      blueCurvedObj.position.x = 0,
        blueCurvedObj.position.y = 0,
        blueCurvedObj.position.z = -10;
        blueCurvedObj.scale.x = 1;
        blueCurvedObj.scale.y = 1;
        blueCurvedObj.scale.z = 1;
      scene.add(blueCurvedObj);

    })
    blueCurvedLine.src = 'imgs/curveLine.svg';
    // Draw Curved Line

    const headText = document.createElement('div');
    headText.classList.add('company-bgGradientTxt');
    headText.innerHTML = 'Hakkaren';
    const headTextObj = new CSS3DSprite(headText);
    headTextObj.position.x = 0;
    headTextObj.position.y = 200;
    headTextObj.position.z = 0;
    scene.add(headTextObj);
    // ICons Start
    const imageloadlens = document.createElement('img');
    imageloadlens.style.width = '110px';
    imageloadlens.addEventListener('load', function () {
      const object = new CSS3DSprite(imageloadlens);
      object.position.x = bluePosList[8].x,
        object.position.y = bluePosList[8].y,
        object.position.z = 0;
      scene.add(object);
      blueLineEffects.push({ index: 8, ObjData: object });
    });
    imageloadlens.src = 'imgs/LoadLens_svg.png';
    const borderLoadlens = document.createElement('div');
    borderLoadlens.style.width = '170px';
    borderLoadlens.style.height = '170px';
    borderLoadlens.style.border = '2px dotted #7DBAFF';
    borderLoadlens.style.borderRadius = '50%';
    const loadlensObj = new CSS3DSprite(borderLoadlens);
    loadlensObj.position.x = bluePosList[8].x,
      loadlensObj.position.y = bluePosList[8].y,
      loadlensObj.position.z = 0;
    scene.add(loadlensObj);
    // blueLineEffects.push({index:8, ObjData: loadlensObj});

    const imagedataForger: HTMLImageElement = document.createElement('img');
    imagedataForger.style.width = '110px';
    imagedataForger.addEventListener('load', function () {
      const forgerObj = new CSS3DSprite(imagedataForger);
      forgerObj.position.x = bluePosList[14].x,
        forgerObj.position.y = bluePosList[14].y,
        forgerObj.position.z = 0;
      scene.add(forgerObj);
      blueLineEffects.push({ index: 14, ObjData: forgerObj });
      //objects.push(object);

    });
    imagedataForger.src = 'imgs/Dataforger_svg.png';
    const borderDataForger = document.createElement('div');
    borderDataForger.style.width = '170px';
    borderDataForger.style.height = '170px';
    borderDataForger.style.border = '2px dotted #E8FCAF';
    borderDataForger.style.borderRadius = '50%';
    const dataForgerObj = new CSS3DSprite(borderDataForger);
    dataForgerObj.position.x = bluePosList[14].x,
      dataForgerObj.position.y = bluePosList[14].y,
      dataForgerObj.position.z = 0;
    scene.add(dataForgerObj);
    // blueLineEffects.push({index:14, ObjData: dataForgerObj});

    const imageNimbus = document.createElement('img');
    imageNimbus.style.width = '110px';
    imageNimbus.addEventListener('load', function () {
      const object = new CSS3DSprite(imageNimbus);
      object.position.x = bluePosList[36].x,
        object.position.y = bluePosList[36].y,
        object.position.z = 0;
      scene.add(object);
      blueLineEffects.push({ index: 36, ObjData: object });
    });
    imageNimbus.src = 'imgs/Nimbus_svg.png';
    const borderNimbus = document.createElement('div');
    borderNimbus.style.width = '170px';
    borderNimbus.style.height = '170px';
    borderNimbus.style.border = '2px dotted #7DBAFF';
    borderNimbus.style.borderRadius = '50%';
    const nimbusObj = new CSS3DSprite(borderNimbus);
    nimbusObj.position.x = bluePosList[36].x,
      nimbusObj.position.y = bluePosList[36].y,
      nimbusObj.position.z = 0;
    scene.add(nimbusObj);
    // effectBorders.push(nimbusObj);
    // blueLineEffects.push({index:36, ObjData: nimbusObj});

    const imageHakkaren = document.createElement('img');
    imageHakkaren.style.width = '165px';
    imageHakkaren.addEventListener('load', function () {
      const object = new CSS3DSprite(imageHakkaren);
      object.position.x = 20,
        object.position.y = 115,
        object.position.z = 0;
      scene.add(object);
      yellowLineEffects.push({ index: 21, ObjData: object });
    })
    imageHakkaren.src = 'imgs/Hakkaren_svg.png';
    const borderHakkaren = document.createElement('div');
    borderHakkaren.style.width = '235px';
    borderHakkaren.style.height = '235px';
    borderHakkaren.style.border = '2px dotted #6E8DE5';
    borderHakkaren.style.borderRadius = '50%';
    const hakkarenObj = new CSS3DSprite(borderHakkaren);
    hakkarenObj.position.x = 20,
      hakkarenObj.position.y = 115,
      hakkarenObj.position.z = 30;
    scene.add(hakkarenObj);
    effectBorders.push(hakkarenObj);

    const blueBigDot = document.createElement('div');
    blueBigDot.style.width = '50px';
    blueBigDot.style.height = '50px';
    blueBigDot.style.backgroundColor = '#6E8DE5';
    blueBigDot.style.borderRadius = '50%';
    const blueBigDotSp = new CSS3DSprite(blueBigDot);
    blueBigDotSp.position.x = bluePosList[29].x,
      blueBigDotSp.position.y = bluePosList[29].y,
      blueBigDotSp.position.z = 0;
    scene.add(blueBigDotSp);
    blueLineEffects.push({ index: 29, ObjData: blueBigDotSp });
    yellowLineEffects.push({ index: 29, ObjData: blueBigDotSp });
    const borderBlueBigDot = document.createElement('div');
    borderBlueBigDot.style.width = '75px';
    borderBlueBigDot.style.height = '75px';
    borderBlueBigDot.style.border = '2px dotted #BDD3D3';
    borderBlueBigDot.style.borderRadius = '50%';
    const borderBlueBigDotSp = new CSS3DSprite(borderBlueBigDot);
    borderBlueBigDotSp.position.x = bluePosList[29].x,
      borderBlueBigDotSp.position.y = bluePosList[29].y,
      borderBlueBigDotSp.position.z = 0;
    scene.add(borderBlueBigDotSp);
    // blueLineEffects.push({index:29, ObjData: borderBlueBigDotSp});

    const yellowBigDot = document.createElement('div');
    yellowBigDot.style.width = '57px';
    yellowBigDot.style.height = '57px';
    yellowBigDot.style.backgroundColor = '#E8FCAF';
    yellowBigDot.style.borderRadius = '50%';
    const yellowBigDotSp = new CSS3DSprite(yellowBigDot);
    yellowBigDotSp.position.x = yellowPosList[16].x,
      yellowBigDotSp.position.y = yellowPosList[16].y,
      yellowBigDotSp.position.z = 0;
    scene.add(yellowBigDotSp);
    yellowLineEffects.push({ index: 16, ObjData: yellowBigDotSp });
    const borderYellowBigDot = document.createElement('div');
    borderYellowBigDot.style.width = '85px';
    borderYellowBigDot.style.height = '85px';
    borderYellowBigDot.style.border = '2px dotted #3860D2';
    borderYellowBigDot.style.borderRadius = '50%';
    const borderYellowBigDotSp = new CSS3DSprite(borderYellowBigDot);
    borderYellowBigDotSp.position.x = yellowPosList[16].x,
      borderYellowBigDotSp.position.y = yellowPosList[16].y,
      borderYellowBigDotSp.position.z = 0;
    scene.add(borderYellowBigDotSp);
    effectBorders.push(borderYellowBigDotSp);
    // ICons End

    //postions2

    // const svgYellowDot = document.createElement('img');
    // svgYellowDot.addEventListener('load', function () {
    //   yellowDotObj = new CSS3DSprite(svgYellowDot.cloneNode());
    //   yellowDotObj.position.x = 900;
    //   yellowDotObj.position.y = -12;
    //   yellowDotObj.position.z = -10;
    //   scene.add(yellowDotObj);
    // });
    // svgYellowDot.src = 'imgs/dot_svg.svg';
    drawYellowLineDots();
    drawBlueLineDots();

    // const dotSvg = document.createElement('img');
    // dotSvg.addEventListener('load', function () {
    //   dotObj = new CSS3DSprite(dotSvg.cloneNode());
    //   dotObj.position.x = -800,
    //     dotObj.position.y = 30,
    //     dotObj.position.z = -9;
    //   scene.add(dotObj);
    // })
    // dotSvg.src = 'imgs/dot_svg.svg';



    renderer = new CSS3DRenderer();
    renderer.setSize(window.innerWidth, (window.innerWidth / 1920) * 600);
    threeRenderef.current?.appendChild(renderer.domElement);
   // transition();
    window.addEventListener('resize', onWindowResize);
  }
  const onWindowResize = () => {

    camera.aspect = 1920 / 600;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, (window.innerWidth / 1920) * 600 );

  }
  const drawBlueLineDots = () => {
    const blueDot1 = document.createElement('div');
    blueDot1.style.width = '30px';
    blueDot1.style.height = '30px';
    blueDot1.style.borderRadius = '50%';
    blueDot1.style.backgroundColor = '#FFFFFF';
    const blueLDotObj = new CSS3DSprite(blueDot1);
    blueLDotObj.position.x = bluePosList[19].x,
    blueLDotObj.position.y = bluePosList[19].y,
    blueLDotObj.position.z = bluePosList[19].z;
    scene.add(blueLDotObj);
    blueLineDots.push({ index: 19, ObjData: blueLDotObj, dotSize: 30 })

    const blueDot2 = document.createElement('div');
    blueDot2.style.width = '18px';
    blueDot2.style.height = '18px';
    blueDot2.style.borderRadius = '50%';
    blueDot2.style.backgroundColor = '#6E8DE5';
    const blueLDotObj2 = new CSS3DSprite(blueDot2);
    blueLDotObj2.position.x = bluePosList[23].x,
    blueLDotObj2.position.y = bluePosList[23].y,
    blueLDotObj2.position.z = bluePosList[23].z;
    scene.add(blueLDotObj2);
    blueLineDots.push({ index: 23, ObjData: blueLDotObj2, dotSize: 18 })

    const blueDot3 = document.createElement('div');
    blueDot3.style.width = '17px';
    blueDot3.style.height = '17px';
    blueDot3.style.borderRadius = '50%';
    blueDot3.style.backgroundColor = '#FFFFFF';
    const blueLDotObj3 = new CSS3DSprite(blueDot3);
    blueLDotObj3.position.x = bluePosList[31].x,
    blueLDotObj3.position.y = bluePosList[31].y,
    blueLDotObj3.position.z = bluePosList[31].z;
    scene.add(blueLDotObj3);
    blueLineDots.push({ index: 31, ObjData: blueLDotObj3, dotSize: 17 })

    // bluePosList.map((pItem, index) => {
    //   const blueDottmp = document.createElement('div');
    //   blueDottmp.style.width = '10px';
    //   blueDottmp.style.height = '10px';
    //   blueDottmp.style.borderRadius = '50%';
    //   blueDottmp.style.backgroundColor = '#999999';
    //   const blueLDotObj2 = new CSS3DSprite(blueDottmp);
    //   blueLDotObj2.position.x = pItem.x,
    //   blueLDotObj2.position.y = pItem.y,
    //   blueLDotObj2.position.z = pItem.z;
    //   scene.add(blueLDotObj2);

    //   const spanObj = document.createElement('span');
    //   spanObj.innerHTML = '{'+index +'}';
    //   spanObj.style.fontSize = '11px';
    //   spanObj.style.fontWeight = '300';
    //   spanObj.style.color='red';
    //   const spanObjSp = new CSS3DSprite(spanObj);
    //   spanObjSp.position.x = pItem.x,
    //   spanObjSp.position.y = pItem.y - 50,
    //   spanObjSp.position.z = pItem.z;
    //   scene.add(spanObjSp);
    // })
  }

  const drawYellowLineDots = () => {
    //yellow line dots
    const yellowDot1 = document.createElement('div');
    yellowDot1.style.width = '30px';
    yellowDot1.style.height = '30px';
    yellowDot1.style.borderRadius = '50%';
    yellowDot1.style.backgroundColor = '#999999';
    const yellowLDotObj = new CSS3DSprite(yellowDot1);
    yellowLDotObj.position.x = yellowPosList[5].x,
    yellowLDotObj.position.y = yellowPosList[5].y,
    yellowLDotObj.position.z = yellowPosList[5].z;
    scene.add(yellowLDotObj);
    yellowLineDots.push({ index: 5, ObjData: yellowLDotObj, dotSize: 30 })

    const yellowDot2 = document.createElement('div');
    yellowDot2.style.width = '13px';
    yellowDot2.style.height = '13px';
    yellowDot2.style.borderRadius = '50%';
    yellowDot2.style.backgroundColor = '#999999';
    const yellowLDotObj2 = new CSS3DSprite(yellowDot2);
    yellowLDotObj2.position.x = yellowPosList[11].x,
    yellowLDotObj2.position.y = yellowPosList[11].y,
    yellowLDotObj2.position.z = yellowPosList[11].z;
    scene.add(yellowLDotObj2);
    yellowLineDots.push({ index: 11, ObjData: yellowLDotObj2, dotSize: 13 })

    const yellowDot3 = document.createElement('div');
    yellowDot3.style.width = '18px';
    yellowDot3.style.height = '18px';
    yellowDot3.style.borderRadius = '50%';
    yellowDot3.style.backgroundColor = '#6E8DE5';
    const yellowLDotObj3 = new CSS3DSprite(yellowDot3);
    yellowLDotObj3.position.x = yellowPosList[26].x,
    yellowLDotObj3.position.y = yellowPosList[26].y,
    yellowLDotObj3.position.z = yellowPosList[26].z;
    scene.add(yellowLDotObj3);
    yellowLineDots.push({ index: 26, ObjData: yellowLDotObj3, dotSize: 18 })

    const yellowDot4 = document.createElement('div');
    yellowDot4.style.width = '30px';
    yellowDot4.style.height = '30px';
    yellowDot4.style.borderRadius = '50%';
    yellowDot4.style.backgroundColor = '#E8FCAF';
    const yellowLDotObj4 = new CSS3DSprite(yellowDot4);
    yellowLDotObj4.position.x = yellowPosList[34].x,
    yellowLDotObj4.position.y = yellowPosList[34].y,
    yellowLDotObj4.position.z = yellowPosList[34].z;
    scene.add(yellowLDotObj4);
    // yellowLineDots.push(yellowLDotObj4);
    yellowLineDots.push({ index: 34, ObjData: yellowLDotObj4, dotSize: 30 })

    // yellowPosList.map((pItem, index) => {
    //   const yellowDot2 = document.createElement('div');
    //   yellowDot2.style.width = '10px';
    //   yellowDot2.style.height = '10px';
    //   yellowDot2.style.borderRadius = '50%';
    //   yellowDot2.style.backgroundColor = '#999999';
    //   const yellowLDotObj2 = new CSS3DSprite(yellowDot2);
    //   yellowLDotObj2.position.x = pItem.x,
    //     yellowLDotObj2.position.y = pItem.y,
    //     yellowLDotObj2.position.z = 100;
    //   scene.add(yellowLDotObj2);

    //   const spanObj = document.createElement('span');
    //   spanObj.innerHTML = '{'+index +'}';
    //   spanObj.style.fontSize = '11px';
    //   spanObj.style.fontWeight = '300';

    //   const spanObjSp = new CSS3DSprite(spanObj);
    //   spanObjSp.position.x = pItem.x,
    //   spanObjSp.position.y = pItem.y - 50,
    //   spanObjSp.position.z = 100;
    //   scene.add(spanObjSp);
    // })
  }

  const yellowEffectAction = (id: any, size: number) => {
    const effectList = yellowLineEffects.filter(yEffect => yEffect.index == id);
    if (effectList.length > 0) {
      effectList.map(effectItem => {
        new TWEEN.Tween(effectItem.ObjData.scale)
          .to({
            x: 1 + (size * 0.005),
            y: 1 + (size * 0.005),
            z: 1 + (size * 0.005)
          }, 300)
          .easing(TWEEN.Easing.Exponential.Out)
          .onComplete(() => {
            new TWEEN.Tween(effectItem.ObjData.scale)
              .to({
                x: 1,
                y: 1,
                z: 1
              }, 300)
              .easing(TWEEN.Easing.Exponential.In)
              .start()
          })
          .start();
      })
    }
  }

  const blueEffectAction = (id: any, size: number) => {
    const effectList = blueLineEffects.filter(bEffect => bEffect.index == id);
    if (effectList.length > 0) {
      effectList.map(effectItem => {
        new TWEEN.Tween(effectItem.ObjData.scale)
          .to({
            x: 1 + (size * 0.005),
            y: 1 + (size * 0.005),
            z: 1 + (size * 0.005)
          }, 300)
          .easing(TWEEN.Easing.Exponential.Out)
          .onComplete(() => {
            new TWEEN.Tween(effectItem.ObjData.scale)
              .to({
                x: 1,
                y: 1,
                z: 1
              }, 300)
              .easing(TWEEN.Easing.Exponential.In)
              .start()
          })
          .start();
      })
    }
  }
  const transition = () => {

    // const offset = current * particlesTotal * 3;
    const duration = 40;

    if (yellowLineDots.length > 0) {
      yellowLineDots.map(yDot => {
        let yPointer = (currentYellowIndex - 1) + yDot.index;
        if (!(yPointer < yellowPosList.length)) {
          yPointer = 0 + (yPointer - yellowPosList.length);
        }
        new TWEEN.Tween(yDot.ObjData.position)
          .to({
            x: yellowPosList[yPointer].x,
            y: yellowPosList[yPointer].y,
            z: yellowPosList[yPointer].z
          }, duration)
          .easing(TWEEN.Easing.Exponential.InOut)
          .start();
        yellowEffectAction(yPointer, yDot.dotSize);
      })
    }

    if (blueLineDots.length > 0) {
      blueLineDots.map(bDot => {
        let bPointer = (currentBlueIndex - 1) + bDot.index;
        if (!(bPointer < bluePosList.length)) {
          bPointer = 0 + (bPointer - bluePosList.length);
        }

        new TWEEN.Tween(bDot.ObjData.position)
          .to({
            x: bluePosList[bPointer].x,
            y: bluePosList[bPointer].y,
            z: bluePosList[bPointer].z
          }, duration)
          .easing(TWEEN.Easing.Exponential.InOut)
          .start();
        blueEffectAction(bPointer, bDot.dotSize);
      })
    }



    // for (let i = 0; i < 10; i++) {

    // const object = objects[0];

    // new TWEEN.Tween(dotObj.position)
    //   .to({
    //     x: bluePosList[current].x,
    //     y: bluePosList[current].y,
    //     z: bluePosList[current].z
    //   }, duration)
    //   .easing(TWEEN.Easing.Exponential.InOut)
    //   .start();
    // console.log('current Log', bluePosList[current]);
    // // }
    // new TWEEN.Tween(yellowDotObj.position)
    //   .to({
    //     x: yellowPosList[current].x,
    //     y: yellowPosList[current].y,
    //     z: yellowPosList[current].z
    //   }, duration)
    //   .easing(TWEEN.Easing.Exponential.InOut)
    //   .start();

    
    // new TWEEN.Tween(isThisTypeNode)
    //   .to({}, duration * 3)
    //   .onComplete(transition)
    //   .start();

    currentBlueIndex = (currentBlueIndex + 1);
    if (currentBlueIndex == bluePosList.length) {
      currentBlueIndex = 0;
    }

    currentYellowIndex = (currentYellowIndex + 1);
    if (currentYellowIndex == yellowPosList.length) {
      currentYellowIndex = 0;
    }

  }

  function animate() {

    requestAnimationFrame(animate);

    // TWEEN.update();
    // controls.update();

    const time = performance.now();

    for (let i = 0, l = objects.length; i < l; i++) {

      const object = objects[i];
      // const scale = Math.sin((Math.floor(object.position.x) + time) * 0.002) * 0.5;
      // object.scale.set(scale, scale, scale);

    }

    renderer.render(scene, camera);

  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // console.log('current Type', threeRenderef)
      init();
      animate();
    }
  }, []);

  const teamMembers = [
    {
      avata: teamImg1,
      name: 'Andrey Khusid',
      level: 'CEO and Co-founder, Amsterdam',
    },
    {
      avata: teamImg2,
      name: 'Andrey Khusid',
      level: 'CEO and Co-founder, Amsterdam',
    },
    {
      avata: teamImg3,
      name: 'Andrey Khusid',
      level: 'CEO and Co-founder, Amsterdam',
    },
    {
      avata: teamImg4,
      name: 'Andrey Khusid',
      level: 'CEO and Co-founder, Amsterdam',
    },
    {
      avata: teamImg5,
      name: 'Andrey Khusid',
      level: 'CEO and Co-founder, Amsterdam',
    },
    {
      avata: teamImg6,
      name: 'Andrey Khusid',
      level: 'CEO and Co-founder, Amsterdam',
    },
    {
      avata: teamImg7,
      name: 'Andrey Khusid',
      level: 'CEO and Co-founder, Amsterdam',
    },
    {
      avata: teamImg8,
      name: 'Andrey Khusid',
      level: 'CEO and Co-founder, Amsterdam',
    },
    {
      avata: teamImg9,
      name: 'Andrey Khusid',
      level: 'CEO and Co-founder, Amsterdam',
    }
  ]

  const [mobileTeamCounter, setMobileTeamCounter] = useState(4);

  const [playingVideo, setPlayingVideo] = useState(false);
  const onPlayVideo = () => {
    setPlayingVideo(!playingVideo);
  };

  return (
    <section className="">
      <div className="aboutUs-section relative pt-10 pb-0 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="yellow font-extrabold text-[25px] ">
            About Hakkaren
          </span>
          <div
            className="leading-[50px] lg:leading-[100px] font-extrabold "
          >
            <abbr className="text-[32px] sm:text-[40px] lg:text-[75px] tracking-wide px-4 lg:px-8 custom-start-lg-effect ">AI-Powered <abbr className="company-gradientTxt">Test Data</abbr> <abbr className="px-4 lg:px-8 custom-end-lg-effect">Management.</abbr></abbr>
          </div>
        </div>
        {/* <div className="w-full py-10 md:py-20 absolute top-0">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="yellow font-extrabold text-[25px] ">
              About Hakkaren
            </span>
            <h1 className="font-extrabold mt-4"><abbr className="pl-4 md:pl-8 custom-start-effect ">AI-Powered</abbr> <abbr className="company-gradientTxt">Test Data</abbr> <abbr className="pr-4 md:pr-8 custom-h1-end-effect">Management.</abbr></h1>
          </div>
        </div> */}
        <div className="-mt-4 md:-mt-8 min-h-[100px]" ref={threeRenderef}></div>
        <div className="hidden lg:block w-full text-center -mt-20">
          <ScrollDowntxt />
        </div>

      </div>
      <div className="aboutUs-section relative py-5 lg:py-20">
        <div className="hidden lg:block section-waveBg absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
        <div className="hidden lg:block max-w-7xl mx-auto">
          <h1 className="text-center text-bold"><span className="px-4 lg:px-8 custom-start-lg-effect ">About Hakkaren</span></h1>
          <h2 className="text-center my-8 text-gray-400"><abbr className="color-blue">Hakkaren</abbr> <abbr className="text-white font-semibold">strives to be your</abbr> streamlined solution for comprehensive testing needs</h2>
        </div>
        <div className="aboutUs-section relative pt-10 lg:pt-20 ">
          <div className="max-w-7xl lg:px-2 m-auto">
            <div className="w-full hero-play-card bg-dark shadow ">
              <div className="hero-play-card-content">
                <div className="w-full relative h-full p-4 lg:p-10 flex flex-col justify-between">
                  <div className="hero-play-card-text h-20">
                    <p>Fake Data Generation</p>
                    <p>Environment as a Service(EaaS),</p>
                    <p>and Load Testing Analysis</p>
                  </div>
                  <div className="hero-play-card-logo text-center lg:h-20 flex justify-center items-center">
                    <Image
                      src={logo}
                      height={100}
                      alt="logo"
                    />
                    <Image
                      onClick={() => { onPlayVideo() }}
                      className="block lg:hidden absolute mobile-hereo-play-btn cursor-pointer"
                      src={playBtn}
                      height={100}
                      alt="playIco"
                    />
                  </div>
                  <div className=" lg:h-20">
                    <div onClick={() => { onPlayVideo() }} className="hidden lg:flex cursor-pointer hero-play-btn px-2 rounded-full bg-black justify-end items-center">
                      <span className="hero-play-btn-text px-6">Play</span>
                      <Image
                        src={playIco}
                        height={65}
                        alt="playIco"
                      />
                    </div>
                  </div>
                </div>
                <Mediapopup playingVideo={playingVideo} src={'videos/demo.mp4'} closePlayingVideo={setPlayingVideo} />

              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden aboutUs-section relative mt-6 px-2">
          <p className="text-start my-8 leading-8 text-white text-[25px]">" <abbr className="color-blue">Hakkaren</abbr> strives to be your streamlined solution for comprehensive <abbr className="yellow">testing needs</abbr> "</p>
        </div>
      </div>
      <div className="aboutUs-section relative py-5 lg:py-20 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="aboutUs-left">
              <h2><span className="px-4 lg:px-8 custom-start-lg-effect ">Mission & Vision</span></h2>
              <p className="px-4 lg:px-8 py-4 lg:py-8">
                Our ultimate goal is to revolutionize the testing process by providing a centralized hub for companies to streamline their testing efforts.
              </p>
              <p className="px-4 lg:px-8 py-4 lg:py-8">
                By eliminating the fragmentation that often occurs in testing, we aim to make the process more efficient, effective, and seamless.
              </p>
              <p className="px-4 lg:px-8 py-4 lg:py-8">
                At HakkaRen, we are committed to empowering businesses with the tools and resources they need to optimize their testing process and achieve success.
              </p>
            </div>
            <div className="aboutUs-right">
              <Image
                src={missionImg}
                className="w-full"
                alt="mission"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUs-section relative py-5 lg:py-20 px-2">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-start lg:text-center text-bold"><span className="px-4 lg:px-8 custom-start-effect ">Team</span></h1>
          <p className="px-4 lg:px-8 my-8 text-start lg:text-center w-full lg:w-2/3 mx-auto">
            Ever want to test a specific user or scenario, but data seeding is a pain? Tired of constantly requesting data seeding to developers? DataForger solves this and more.
          </p>
          <div className="w-full hidden lg:grid grid-cols-3 gap-10">
            {
              teamMembers.map((teamMember, key) => (
                <div className="teamMember-card text-center" key={key}>
                  <Image
                    className="mx-auto rounded-2xl"
                    src={teamMember.avata}
                    alt="teamAvata"
                  />
                  <div className="full py-4">
                    <span className="font-bold text-[24px]">{teamMember.name}</span>
                    <p>{teamMember.level}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="w-full lg:hidden grid grid-cols-1 gap-10">
            {
              teamMembers.map((teamMember, key) => (
                <div key={key}>
                  {key < mobileTeamCounter &&
                    <div className="teamMember-card text-center" >
                      <Image
                        className="mx-auto rounded-2xl"
                        src={teamMember.avata}
                        alt="teamAvata"
                      />
                      <div className="full py-4">
                        <span className="font-bold text-[24px]">{teamMember.name}</span>
                        <p>{teamMember.level}</p>
                      </div>
                    </div>
                  }
                </div>
              ))
            }
          </div>
          <button onClick={() => { setMobileTeamCounter(mobileTeamCounter + 4) }} className="flex justify-center items-center w-full rounded px-12 py-2 bg-white text-black font-bold mx-auto">
            Show more
          </button>
        </div>
      </div>
      <div className="aboutUs-section relative py-5 lg:py-20 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="aboutUs-left order-2 lg:order-1">
              <Image
                src={leaderShipImg}
                className="w-full"
                alt="leadership"
              />
            </div>
            <div className="aboutUs-right order-1 lg:order-2">
              <h2><span className="px-4 lg:px-8 custom-start-lg-effect ">Leadership</span></h2>
              <p className="px-4 lg:px-8 py-4 lg:py-8">
                Our ultimate goal is to revolutionize the testing process by providing a centralized hub for companies to streamline their testing efforts.
              </p>
              <p className="px-4 lg:px-8 py-4 lg:py-8">
                By eliminating the fragmentation that often occurs in testing, we aim to make the process more efficient, effective, and seamless.
              </p>
              <p className="px-4 lg:px-8 py-4 lg:py-8">
                At HakkaRen, we are committed to empowering businesses with the tools and resources they need to optimize their testing process and achieve success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUs-section relative py-5 lg:py-20 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="aboutUs-left ">
              <h2><span className="px-4 lg:px-8 custom-start-lg-effect ">Angel Investors</span></h2>
              <p className="px-4 lg:px-8 py-4 lg:py-8">
                Our ultimate goal is to revolutionize the testing process by providing a centralized hub for companies to streamline their testing efforts.
              </p>
              <p className="px-4 lg:px-8 py-4 lg:py-8">
                By eliminating the fragmentation that often occurs in testing, we aim to make the process more efficient, effective, and seamless.
              </p>
              <p className="px-4 lg:px-8 py-4 lg:py-8">
                At Hakkaren, we are committed to empowering businesses with the tools and resources they need to optimize their testing process and achieve success.
              </p>
              <p className="px-4 lg:px-8 py-4 lg:py-8">
                At Hakkaren, we are committed to empowering businesses with the tools and resources they need to optimize their testing process and achieve success.
              </p>
            </div>
            <div className="aboutUs-right">
              <div className="angle-content p-6 grid grid-cols-2 gap-5">
                <div className="teamMember-card text-center" >
                  <Image
                    className="mx-auto rounded-2xl"
                    src={angelImg1}
                    alt="teamAvata"
                  />
                  <div className="full py-2 lg:py-4">
                    <span className="font-bold text-[13px] lg:text-[22px]">Andrey Khusid</span>
                    <p className="text-[9px] lg:text-[16px]">CEO and Co-founder, Amsterdam</p>
                  </div>
                </div>
                <div className="teamMember-card text-center" >
                  <Image
                    className="mx-auto rounded-2xl"
                    src={angelImg2}
                    alt="teamAvata"
                  />
                  <div className="full py-2 lg:py-4">
                    <span className="font-bold text-[13px] lg:text-[22px]">Andrey Khusid</span>
                    <p className="text-[9px] lg:text-[16px]">CEO and Co-founder, Amsterdam</p>
                  </div>
                </div>
                <div className="teamMember-card text-center" >
                  <Image
                    className="mx-auto rounded-2xl"
                    src={angelImg3}
                    alt="teamAvata"
                  />
                  <div className="full py-2 lg:py-4">
                    <span className="font-bold text-[13px] lg:text-[22px]">Andrey Khusid</span>
                    <p className="text-[9px] lg:text-[16px]">CEO and Co-founder, Amsterdam</p>
                  </div>
                </div>
                <div className="teamMember-card text-center" >
                  <Image
                    className="mx-auto rounded-2xl"
                    src={angelImg4}
                    alt="teamAvata"
                  />
                  <div className="full py-2 lg:py-4">
                    <span className="font-bold text-[13px] lg:text-[22px]">Andrey Khusid</span>
                    <p className="text-[9px] lg:text-[16px]">CEO and Co-founder, Amsterdam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUs-section relative py-5 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto px-2">
          <h2 className="text-start lg:text-center"><span className="-ml-4 lg:-ml-0 px-4 lg:px-8 custom-start-lg-effect ">Venture Investors</span></h2>
          <p className="my-6 w-full lg:w-2/3 text-start lg:text-center mx-auto">Our ultimate goal is to revolutionize the testing process by providing a centralized hub for companies to streamline their testing efforts.</p>
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-10 my-8">
            <div className="teamMember-card text-center" >
              <Image
                className="mx-auto rounded-2xl"
                src={teamImg1}
                alt="teamAvata"
              />
              <div className="full py-4">
                <span className="font-bold">Andrey Khusid</span>
                <p >CEO and Co-founder, Amsterdam</p>
              </div>
            </div>
            <div className="teamMember-card text-center" >
              <Image
                className="mx-auto rounded-2xl"
                src={teamImg1}
                alt="teamAvata"
              />
              <div className="full py-4">
                <span className="font-bold">Andrey Khusid</span>
                <p >CEO and Co-founder, Amsterdam</p>
              </div>
            </div>
            <div className="teamMember-card text-center" >
              <Image
                className="mx-auto rounded-2xl"
                src={teamImg1}
                alt="teamAvata"
              />
              <div className="full py-4">
                <span className="font-bold">Andrey Khusid</span>
                <p >CEO and Co-founder, Amsterdam</p>
              </div>
            </div>
            <div className="teamMember-card text-center" >
              <Image
                className="mx-auto rounded-2xl"
                src={teamImg1}
                alt="teamAvata"
              />
              <div className="full py-4">
                <span className="font-bold">Andrey Khusid</span>
                <p >CEO and Co-founder, Amsterdam</p>
              </div>
            </div>
          </div>
          <p className="my-6 w-full lg:w-2/3 text-start lg:text-center mx-auto">At Hakkaren, we are committed to empowering businesses with the tools and resources they need to optimize their testing process and achieve success.</p>
        </div>
      </div>
      <div className="aboutUs-section bg-blue aiManagement-background relative">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="joinUs-left order-2 lg:order-1 py-10 lg:py-20 pl-5 pr-5 lg:pr-5">
            <div className="w-full lg:w-4/6 float-right">
              <div 
                className="h1 font-normal"
              >
                Join Us: Together Towards New Heights!
              </div>
              <p className="py-3 lg:py-6">
                Our ultimate goal is to revolutionize the testing process by providing a centralized hub for companies to streamline their testing efforts.
              </p>
              <p className="py-3 lg:py-6">
                By eliminating the fragmentation that often occurs in testing, we aim to make the process more efficient, effective, and seamless.
              </p>
              <button className="w-full lg:w-fit font-bold md-text-2xl text-black bg-white py-2 px-12 rounded">
                Join us!
              </button>
            </div>

          </div>
          <div className="joinUs-right order-1 lg:order-2">
            <Image
              className="w-full h-full"
              src={joinUsbaner}
              alt="joinus"
            />
          </div>
        </div>
      </div>
      {/* old code */}

    </section>
  );
}

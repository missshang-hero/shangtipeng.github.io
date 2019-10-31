<template>
  <div ref="chart" id="chart" style="width:600px;height:600px;">

  </div>

</template>
<script>
  import $ from '../../../static/jquery';
  window.$this = ''
  export default {
    data(){
      return {
        time:'',
        aaaaaa : '',
      }
    },
    created(){
      window.$this = this;
    },
    methods:{
      init:function () {
        const container = this.$refs.chart;
        // console.log();
        // console.log(this);
        // console.log($('#chart'));
          // var window = container;
          // console.log(window);
          $(document).ready(function(){
            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
            var renderer = new THREE.WebGLRenderer({alpha: true});

            renderer.setPixelRatio(1 );
            renderer.setClearColor(0xffffff, 0);


            var camera = new THREE.PerspectiveCamera( 35, 1, 1, 2000 );
                camera.aspect = 1.5102669404517455;
            // console.log(camera);
            // console.log(camera.aspect);



            var controls = new THREE.OrbitControls( camera, renderer.domElement );


            var scene = new THREE.Scene();



            // var matFloor = new THREE.MeshPhongMaterial();

            var matBox = new THREE.MeshPhongMaterial( { color: 0xffffff } );



            var geoFloor = new THREE.PlaneBufferGeometry( 1000, 1000 );

            var geoBox = new THREE.BoxBufferGeometry( 3, 1, 2 );




            //earth
            //添加地球 d地球贴图1
              var geometry = new THREE.SphereGeometry(15, 80, 80);
              var material = new THREE.MeshPhongMaterial({
                  // map:THREE.ImageUtils.loadTexture("img/earth.jpg"),
                  transparent:true,
                  map:THREE.ImageUtils.loadTexture("../../../static/img/crow.png"),

                  // map:THREE.ImageUtils.loadTexture("img/earthD1.png"),
                  opacity: 1
              });
              var mesh = new THREE.Mesh(geometry,material);
              //添加高光颜色
              // material.specular = new THREE.Color(0x00ffff);

              //添加高光的平滑度，默认为30，值越高越强烈
              material.shininess = 10;

              //添加到场景
              var earth = new THREE.Mesh(geometry, material);
              earth.position.set(-20, 0, 10);
              scene.add(earth);

              //d地球贴图2
              var geometry0 = new THREE.SphereGeometry(15.2, 80, 80);
              var material0 = new THREE.MeshPhongMaterial({
                  // map:THREE.ImageUtils.loadTexture("img/earth.jpg"),
                  // map:THREE.ImageUtils.loadTexture("img/crow.png"),
                  map:THREE.ImageUtils.loadTexture("../../../static/img/earthD1.png"),
                  transparent:true,
                  opacity:1
              });
              var mesh0 = new THREE.Mesh(geometry0,material0);
              //添加高光颜色
              // material.specular = new THREE.Color(0x00ffff);

              //添加高光的平滑度，默认为30，值越高越强烈
              material0.shininess = 10;

              //添加到场景
              var earth0 = new THREE.Mesh(geometry0, material0);
              earth0.position.set(-20, 0, 10);
              scene.add(earth0);



              //添加地球  线1
                var geometry2 = new THREE.SphereGeometry(20, 80, 80);
                var material2 = new THREE.MeshPhongMaterial({
                    // map:THREE.ImageUtils.loadTexture("img/earth.jpg"),
                    // map:THREE.ImageUtils.loadTexture("img/crow.png"),
                    map:THREE.ImageUtils.loadTexture("../../../static/line.png"),
                    transparent:true,
                    opacity:1
                });
                var mesh2 = new THREE.Mesh(geometry2,material2);
                //添加高光颜色
                // material.specular = new THREE.Color(0x00ffff);

                //添加高光的平滑度，默认为30，值越高越强烈
                material2.shininess = 10;

                //添加到场景
                var earth2 = new THREE.Mesh(geometry2, material2);
                earth2.position.set(-20, 0, 10);
                scene.add(earth2);
                //添加地球  线2
                  var geometry3 = new THREE.SphereGeometry(20, 80, 80);
                  var material3 = new THREE.MeshPhongMaterial({
                      // map:THREE.ImageUtils.loadTexture("img/earth.jpg"),
                      // map:THREE.ImageUtils.loadTexture("img/crow.png"),
                      map:THREE.ImageUtils.loadTexture("../../../static/img/line.png"),
                      transparent:true,
                      opacity:1
                  });
                  var mesh3 = new THREE.Mesh(geometry3,material3);
                  //添加高光颜色
                  // material.specular = new THREE.Color(0x00ffff);

                  //添加高光的平滑度，默认为30，值越高越强烈
                  material3.shininess = 10;

                  //添加到场景
                  var earth3 = new THREE.Mesh(geometry3, material3);
                  earth3.position.set(-20, 0, 10);
                  scene.add(earth3);
                  //添加地球  线3
                    var geometry4 = new THREE.SphereGeometry(20, 80, 80);
                    var material4 = new THREE.MeshPhongMaterial({
                        // map:THREE.ImageUtils.loadTexture("img/earth.jpg"),
                        // map:THREE.ImageUtils.loadTexture("img/crow.png"),
                        map:THREE.ImageUtils.loadTexture("../../../static/img/line.png"),
                        transparent:true,
                        opacity:1
                    });
                    var mesh4 = new THREE.Mesh(geometry4,material4);
                    //添加高光颜色
                    // material.specular = new THREE.Color(0x00ffff);

                    //添加高光的平滑度，默认为30，值越高越强烈
                    material4.shininess = 10;

                    //添加到场景
                    var earth4 = new THREE.Mesh(geometry4, material4);
                    earth4.position.set(-20, 0, 10);
                    scene.add(earth4);
            var mshBox = new THREE.Mesh( geoBox, matBox );
            var ambient = new THREE.AmbientLight( 0x111111 );

            var sphere = new THREE.SphereBufferGeometry( 1, 16, 8 );

            //环境光
            var ambientLight = new THREE.AmbientLight(0xEDF9FC);
            scene.add(ambientLight);

            var spotLight1 = createSpotlight( 0xEDF9FC );
            var lightHelper1;
            function inits() {
            renderer.shadowMap.enabled = true;
              renderer.shadowMap.type = THREE.PCFSoftShadowMap;

              renderer.gammaInput = true;

              renderer.gammaOutput = true;
              camera.position.set( 46, 22, - 21 );

              //散射光源
              var dirLight = new THREE.DirectionalLight( 0xEDF9FC, 0.2 );

              dirLight.position.set(10, 18, -8).normalize();

              dirLight.color.setHSL( 1, 0.7, 0.5 );

              scene.add( dirLight );
            // lensflares

              var textureLoader = new THREE.TextureLoader();


              //太阳光贴图背景
              var textureFlare0 = textureLoader.load( '../../../static/img/lensflare0_alpha.png' );

              var textureFlare3 = textureLoader.load( '../../../static/img/lensflare3.png' );

              //设置光源位置坐标
              addLight( -30, 16, -0 );  //太阳位置
              function addLight(  x, y, z ) {



                var light = new THREE.PointLight( 0xEDF9FC, 3000, 1 );

                // light.color.setHSL( h, s, l );
                //
                light.position.set( x, y, z );

                scene.add( light );



                var lensflare = new THREE.Lensflare();

                lensflare.addElement( new THREE.LensflareElement( textureFlare0, 500, 0, light.color ) );

                light.add( lensflare );

              }
              //散射光源end


              spotLight1.position.set( -50,30, -40 ); //调节光源位置


              lightHelper1 = new THREE.SpotLightHelper( spotLight1 );//设置光源
              lightHelper1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xffffff } ) ) ); //光源球体


              mshBox.castShadow = true;

              mshBox.receiveShadow = true;

              mshBox.position.set( 0, 5, 0 );



              // scene.add( mshFloor ); //添加平面

              // scene.add(sphereMesh);//将球体添加到场景

              // scene.add( mshBox );

              scene.add( ambient );

              scene.add( spotLight1);  //开启方向光源

              // scene.add( lightHelper1);
              window.$this.aaaaaa = renderer.domElement;
              // var that = $;
              console.log(window.$this.aaaaaa)
              container.appendChild(renderer.domElement);
              console.log(document.body)

              console.log(renderer.domElement);
              // console.log(container);

              onResize();

              container.addEventListener( 'resize', onResize, false );



              controls.target.set( 0, 7, 0 );

              controls.maxPolarAngle = Math.PI / 2;

              controls.update();



            }



            function createSpotlight( color ) {



              var newObj = new THREE.SpotLight( color, 5 );



              newObj.castShadow = false;

              // newObj.angle = 0.3;

              newObj.penumbra = 0;

              // newObj.decay = 2;

              newObj.distance = 100;
              newObj.shadow.mapSize.width = 0;

              newObj.shadow.mapSize.height = 0;
              return newObj;

            }
            function onResize() {
              camera.aspect =1;

              camera.updateProjectionMatrix();

              renderer.setSize( 1600, 800 );
              renderer.setClearColor(0xffffff, 0);
            }


            //光源移动动画
            function tween( light ) {



              new TWEEN.Tween( light ).to( {

                angle: ( Math.random() * 0.7 ) + 0.1,

                penumbra: Math.random() + 1

              }, Math.random() * 3000 + 2000 )

              .easing( TWEEN.Easing.Quadratic.Out ).start();



              new TWEEN.Tween( light.position ).to( {

                x: ( Math.random() * 30 ) - 15,

                y: ( Math.random() * 10 ) + 15,

                z: ( Math.random() * 30 ) - 15

              }, Math.random() * 3000 + 2000 )

              .easing( TWEEN.Easing.Quadratic.Out ).start();



            }

            function render() {
              earth.rotation.x = -0.2; //让地球倾斜
              earth.rotation.y += 0.01; //让地球自传
              earth0.rotation.y += 0.01; //让地球自传
              earth2.rotation.y += 0.01; //让地球自传
              earth2.rotation.x = -0.3; //让地球自传
              earth3.rotation.y += 0.01; //让地球自传
              earth3.rotation.z = 0.3; //让地球自传
              // earth3.rotation.z = -10; //让地球自传
              earth4.rotation.y += 0.01; //让地球自传
              TWEEN.update();
              if ( lightHelper1 ) lightHelper1.update();
              renderer.render( scene, camera );
              requestAnimationFrame( render );
            }
            inits();

            render();
          })

      }
    },
    mounted(){
      this.init();
    }
  }
  // window.onresize = function(){
  //                   chart2Chart.resize()
  //   }
</script>
<style scoped>
  .header{
    background: #c8c8c8;
    padding: 5px 10px 5px 8px;
    display: flex;
    justify-content: space-between;
  }
  .checkboxGroup{
    display: flex;
    justify-content: flex-end;
  }
  .chart2_tittle{
    display: flex;
    justify-content: space-between;
    color: #fff;
  }
  .chart2_tittle>div{
    width: 100%;
  }
  .chart2_tittle p{
    border-top: 2px solid rgba(0, 96, 255, 0.3);
    border-bottom:2px solid rgba(0, 96, 255, 0.3);
    background: rgba(30, 34, 84, 0.5);
    padding-left: 15px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
  }
  .chart2_tittle1,.chart2_tittle2{
    height: 2vh;
    line-height: 2vh;
  }
  p>img{
    height: 2.9vh;
    position: absolute;
    top: -0.5vh;
    right: -5px;
  }
  .chart{
    height: 18vh;
    display: flex;
    position: relative;
  }
  .chart2{
    height: 18vh;
    width: 100%;
  }
  .chart2{
    height: 18vh;
    width: 100%;
  }
  .roll_per1{
    width: 20%;
    position: absolute;
    top: 6vh;
    left: 15%;
  }
  .roll_per1 img{
    width: 100%;
    background-color: #57AEFF;
    border-radius: 50%;
  }
</style>

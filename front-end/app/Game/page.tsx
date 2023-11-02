'use client';

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState, useEffect, useMemo, useContext } from "react";
import {
  ContactShadows,
  Sky,
  SoftShadows,
  Html,
  Stats,
  TrackballControls,
  useHelper,
  OrbitControls,
  RoundedBox,
  MeshWobbleMaterial,
  Stars,
  Sparkles,
  Outlines,
  Effects,
  KeyboardControls,
  useKeyboardControls,
  Box,
  Text
} from "@react-three/drei";
// import { useGLTF, Environment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { RigidBody, vec3, useRapier ,RapierRigidBody , Physics, CuboidCollider } from "@react-three/rapier";
import { Vector3 } from "three";
// import * as jwt from "jsonwebtoken";
// import jwt_decode from "jwt-decode";
import "../globals.css";
import  Model1  from "./model1";
import  Model2  from "./model2";
import  Model3  from "./model3";
import socketmanager from "./socketmanager";
import { contextdata } from "../contextApi";
import { io } from "socket.io-client";
// import { contextdata } from '@/app/contextApi';


// const {profiles, user}:any = useContext(contextdata);
// const myProfile = profiles?.find((profile:any) => profile.userId === user.id);
// const name = `${myProfile?.firstName} ${myProfile?.lastName}`;
// console.log(name);

const Game = () => {
	
	

	const Controls = {
		left: "left",
		right: "right",
	}	
	
	const map = useMemo(() => [
		{ name: Controls.left, keys: ['ArrowLeft'], player: 'player1' },
		{ name: Controls.right, keys: ['ArrowRight'], playerd: 'player1' },
		{ name: Controls.left, keys: ['ArrowLeft'], player: 'player2' },
		{ name: Controls.right, keys: ['ArrowRight'], player: 'player2' },
	  ], []);
	

	/// SOCKET MANAGER

	// socketmanager();
	const {profiles, user} :any= useContext(contextdata);
	const name = `${user?.profile.firstName} ${user?.profile.lastName}`;
	const socket = io("http://localhost:3000/Game");
	
	useEffect(() => {
		socket.on("connect", () => {console.log(name + " is Connected to server");});
		socket.on("disconnect", () => {console.log(name + " is Disconnected from server");});
  
	  }, []);
  
	  useEffect(() => {
		  socket.on("updatePosition", (position) => {
		  // Broadcast the updated position to all connected clients
		  socket.emit("playerPosition", position);
		});
	  }, [profiles]);

	/// SOCKET MANAGER



  const controls = useControls({});
  const { sunPosition } = useControls("sky", {
	sunPosition: [-0.07, -0.03, -0.75],
  });
  const { planecolor } = useControls("color", { planecolor: "#51b151" });
  const { floorcolor } = useControls("color", { floorcolor: "#1572ff" });
  const { paddlecolor } = useControls("color", { paddlecolor: "#abebff" });
  const { fogcolor } = useControls("color", { fogcolor: "#382f21" });



	// Keyboard Controls
	let hasServed = false;
    const playerRef = useRef<THREE.Mesh>(null);
	const playerbodyRef = useRef<RapierRigidBody>(null);

    const AIRef = useRef<THREE.Mesh>(null);
	const AIbodyRef = useRef<RapierRigidBody>(null);
	// const playerbodyRef = useRapier()

	useEffect(() => {
		if(!user) return;
		let isMovingLeft = false;
		let isMovingRight = false;
	  
		const handleKeyDown = (event: KeyboardEvent) => {
		  if (event.code === "ArrowLeft") {
			isMovingLeft = true;
			socket.emit('paddle-move', { direction: 'left', moving: true, playerId: user?.id });
		  } else if (event.code === "ArrowRight") {
			isMovingRight = true;
			socket.emit('paddle-move', { direction: 'right', moving: true , playerId: user?.id });
		  }
		};
	  
		const handleKeyUp = (event: KeyboardEvent) => {
		  if (event.code === "ArrowLeft") {
			isMovingLeft = false;
			socket.emit('paddle-move', { direction: 'left', moving: false, playerId: user?.id  });
		  } else if (event.code === "ArrowRight") {
			isMovingRight = false;
			socket.emit('paddle-move', { direction: 'right', moving: false , playerId: user?.id });
		  }
		};
		// socket.on('paddle-move', (data) => {
		// 	if (data.direction === 'left') {
		// 	  isMovingLeft = data.moving;
		// 	} else if (data.direction === 'right') {
		// 	  isMovingRight = data.moving;
		// 	}
		// });
	  
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
	  
		const updatePosition = () => {
		  if (playerbodyRef.current && playerRef.current) {
			const linvel = playerbodyRef.current?.linvel();
			if (isMovingLeft && linvel?.x < 3 && playerbodyRef.current.translation().x > -4.1) {
			  playerbodyRef.current.applyImpulse({ x: -8, y: 0, z: 0 }, true);
			} else if (isMovingRight && linvel?.x > -3 && playerbodyRef.current.translation().x < 4) {
			  playerbodyRef.current.applyImpulse({ x: 8, y: 0, z: 0 }, true);
			}
			const currentPaddle1Position = playerbodyRef.current.translation().z;
			// console.log(currentPaddle1Position)
			if (currentPaddle1Position !== 0) {
			  playerbodyRef.current.setTranslation(
				{ x: playerbodyRef.current.translation().x, y: playerbodyRef.current.translation().y, z: 0 },
				true
			  );
			}
	  
		  }
	  
	  
		  requestAnimationFrame(updatePosition);
		};
	  
		requestAnimationFrame(updatePosition);
	  
		return () => {
		  window.removeEventListener("keydown", handleKeyDown);
		  window.removeEventListener("keyup", handleKeyUp);
		//   socket.off('paddle-move');
		};
	  }, [user]);

	// AI Controls

	useEffect(() => {
		let isMovingLeft = false;
		let isMovingRight = false;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.code === "KeyA") {
				isMovingLeft = true;
			} else if (event.code === "KeyD") {
				isMovingRight = true;
			}
		};
		
		const handleKeyUp = (event: KeyboardEvent) => {
			if (event.code === "KeyA") {
				isMovingLeft = false;
			} else if (event.code === "KeyD") {
				isMovingRight = false;
			}
		};

		socket.on('paddle-move', (data) => {
			if (data.playerId === user?.id) return;
			if (data.direction === 'left') {
				isMovingRight = data.moving;
			} else if (data.direction === 'right') {
				isMovingLeft = data.moving;
			}
		});
		
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		


		
		const updatePosition = () => {
			// if (AIbodyRef.current && AIRef.current) {
				// 	if (isMovingLeft) {
					// 		AIRef.current.position.x = Math.max(AIRef.current.position.x - 0.2, -4.5);
					// 		AIbodyRef.current.setTranslation(new Vector3(Math.max(AIRef.current.position.x - 0.2, -4.5), 0, 0), false)
					// 	} else if (isMovingRight) {
						// 		AIRef.current.position.x = Math.min(AIRef.current.position.x + 0.2, 4.5);
						// 		AIbodyRef.current.setTranslation(new Vector3(Math.min(AIRef.current.position.x + 0.2, 4.5), 0, 0), false)
						// 	}
						// }
						
			if (AIbodyRef.current && AIRef.current) {
				const linvel = AIbodyRef.current?.linvel();
				if (isMovingLeft && linvel?.x < 3 && AIbodyRef.current.translation().x > -4.1) {
					AIbodyRef.current.applyImpulse({ x: -8, y: 0, z: 0 }, true);
				} else if (isMovingRight && linvel?.x > -3 && AIbodyRef.current.translation().x < 4) {
					AIbodyRef.current.applyImpulse({ x: 8, y: 0, z: 0 }, true);
				}

				const currentPaddle1Position = AIbodyRef.current.translation().z;

				if (currentPaddle1Position !== 0) {
					AIbodyRef.current.setTranslation(
						{x: AIbodyRef.current.translation().x,
						 y: AIbodyRef.current.translation().y,
						 z: 0 }, true)
				}
			}
			

			
			// playerbodyRef.current?.setTranslation({ x: -2, y: 0, z: 0 }, true)

			requestAnimationFrame(updatePosition);
		};

		requestAnimationFrame(updatePosition);

	
		return () => {
		window.removeEventListener("keydown", handleKeyDown);
		window.removeEventListener("keyup", handleKeyUp);
		socket.off('paddle-move');
		};
	}, []);

	// SOCKET BALL CONTROL
	// useEffect(() => {
	// 	socket.on("ballPosition", (position) => {
			
	// 	});
	// }, []);



	// const [player2Position, setPlayer2Position] = useState(0);

	// useEffect(() => {
	// socket.on("playerPosition", (position) => {
	// 	setPlayer2Position(position);
	// });
	// }, []);

	// useEffect(() => {
	// if (playerbodyRef.current && playerRef.current) {
	// 	playerbodyRef.current.setTranslation(
	// 	{ x: playerbodyRef.current.translation().x, y: playerbodyRef.current.translation().y, z: player2Position },
	// 	true
	// 	);
	// }
	// }, [player2Position]);

	// BALL SERVE

	const ballbodyRef = useRef<RapierRigidBody>(null);
	const ballRef = useRef<THREE.Mesh>(null);
	const [p1_count, setCount] = useState(0);
	const [p2_count, setCount2] = useState(0);

	
	
	useEffect(() => {
		let isServing = false;
		
		const ServeDown = (event: KeyboardEvent) => {
			if (event.code === 'Space') {
				// console.log('serve');
				isServing = true;
			}
		};
		
		const ServeUp = (event: KeyboardEvent) => {
			if (event.code === 'Space') {
				// console.log('serve');
				isServing = false;
			}
		};
		
		window.addEventListener('keydown', ServeDown);
		window.addEventListener('keyup', ServeUp);
		
		const serveball = () => {
			if(ballbodyRef.current && ballRef.current)
			{
				if(isServing && !hasServed)
				{
					ballbodyRef.current.applyImpulse({ x: 0.5, y: 0, z: 4 }, true);
					hasServed = true;
				}
				// console.log(ballRef.current.position.z);
				if(ballbodyRef.current.translation().z < -10 || ballbodyRef.current.translation().z > 10)
				{
					if (ballbodyRef.current.translation().z > 10) {
						setCount(previousCount => previousCount + 1);
					}
					if (ballbodyRef.current.translation().z < -10) {
						setCount2(previousCount => previousCount + 1);
					}
					
					// console.log('p1_count= ' + p1_count + ' p2_count= ' + p2_count);
					
					ballbodyRef.current.setTranslation({ x: 0, y: 0.35, z: 0 }, false);
					ballbodyRef.current.setLinvel({ x: 0, y: 0, z: 0 }, false);
					ballbodyRef.current.setAngvel({ x: 0, y: 0, z: 0 }, false);
					// ballbodyRef.velocity.set(0, 0, 0);
					// ballbodyRef.angularVelocity.set(0, 0, 0);
					hasServed = false;
				}
				socket.emit('ballPosition', {x: ballbodyRef.current?.translation().x, y: ballbodyRef.current?.translation().y, z: ballbodyRef.current?.translation().z});
			}
			requestAnimationFrame(serveball);
		};
		requestAnimationFrame(serveball);
		
		socket.on('ballPosition', (data) => {
			if (ballbodyRef.current) {
				ballbodyRef.current.setTranslation(data, true);
			}
			console.log(ballbodyRef.current?.translation());
		});

		// const CountSystem = () => {
		// 	if (ballbodyRef.current && ballRef.current) {
		// 		if (ballbodyRef.current.translation().z > 10) {
		// 		setCount(p1_count + 1);
		// 		}
		// 		if (ballbodyRef.current.translation().z < -10) {
		// 		setCount2(p2_count + 1);
		// 		}
		// 		console.log(p1_count + " - " + p2_count);
		// 	}
		// 	requestAnimationFrame(CountSystem);
		// }
		// requestAnimationFrame(CountSystem);


		// if(ballRef.current)
		// {
			// 	if(ballRef.current.position.z  > 10 || ballRef.current.position.z  < -10)
			// 	{
				// 		hasServed = false;
				// 		ballRef.current.position.set(0, 0.35, 0);
				// 	}
				// }
				
				return () => {
					window.removeEventListener('keydown', ServeDown);
					window.removeEventListener('keyup', ServeUp);
					socket.off('ballPosition');
				};
				
				
		}, []);
		
		interface ScoreboardProps {
			p1_count: number;
			p2_count: number;
		}
		  
	
	const Scoreboard = ({ p1_count, p2_count }: ScoreboardProps) => {
		return (
			<>
				<group>
					<Text receiveShadow color="White" anchorX="center" anchorY="middle" position={[-3.3, 0.05, -4.8]} scale={[6, 6, 6]} rotation={[Math.PI / 2, Math.PI , Math.PI]}>
					{p1_count}
					</Text>
					<Text receiveShadow color="White" anchorX="center" anchorY="middle" position={[3.4, 0.05, 5.5]} scale={[6, 6, 6]} rotation={[Math.PI / 2, Math.PI , Math.PI]}>
					{p2_count}
					</Text>
				</group>
			</>
		);
	  };
	  

	  	// SOCKET UPDATE POSITION {BALL}
		//   const [ballPosition, setBallPosition] = useState({ x: 0, y: 0, z: 0 });
		  
		//   useEffect(() => {
		// 	  socket.on("ballPosition", (position) => {
		// 		  setBallPosition(position);
		// 		});
		// 	}, []);
			
		// 	useEffect(() => {
		// 		const interval = setInterval(() => {
		// 			if (ballbodyRef.current) {
		// 				const position = ballbodyRef.current.translation();
		// 				socket.emit("ballPosition", position);
		// 			}
		// 		}, 100);
		// 		return () => clearInterval(interval);
		// 	}, [ballbodyRef]);
			
		// 	useEffect(() => {
		// 		if (ballbodyRef.current) {
		// 			ballbodyRef.current.setTranslation(ballPosition, true);
		// 		}
		// 	}, [ballPosition]);
			
		// 	const handleCollision = (e: any) => {
		// 		const { body } = e.target;
		// 		if (body.el.id === "ball") {
		// 			const impulse = e.contact.getImpactVelocityAlongNormal() * body.mass;
		// 			if (impulse > 1) {
		// 				const position = ballbodyRef.current?.translation();
		// 				if (position) {
		// 					const { x, y, z } = position;
		// 					const newBallPosition = { x, y, z: -z };
		// 					socket.emit("ballPosition", newBallPosition);
		// 		  setBallPosition(newBallPosition);
		// 		}
		// 	}
		// 	}
		// };

		// // SOCKET UPDATE POSITION {PADDLE}
		// const [paddlePosition, setPaddlePosition] = useState({ x: 0, y: 0, z: 0 });

		// useEffect(() => {
		// socket.on("paddlePosition", (position) => {
		// 	setPaddlePosition(position);
		// });
		// }, []);

		// useEffect(() => {
		// const interval = setInterval(() => {
		// 	if (playerbodyRef.current) {
		// 	const position = playerbodyRef.current.translation();
		// 	socket.emit("paddlePosition", position);
		// 	}
		// }, 100);
		// return () => clearInterval(interval);
		// }, [playerbodyRef]);

		// useEffect(() => {
		// if (playerbodyRef.current) {
		// 	playerbodyRef.current.setTranslation(paddlePosition, true)
		// }
		// }, [paddlePosition]);

		// const paddle1Translation = { x: playerbodyRef.current?.translation().x };
		// socket.emit('updatePaddle1Translation', paddle1Translation);






  return (
	<>
	  <Canvas
		shadows
		camera={{ fov: 75, near: 0.1, far: 300, position: [0, 10, 20] }}
	  >
		<Scoreboard p1_count={p1_count} p2_count={p2_count} />
		<Sparkles
			count={2000}
			speed={4}
			opacity={1} 
			color={ 0x00ffff }
			size={Float32Array.from(Array.from({ length: 2000 }, () => Math.random() * (80 - 5) + 10))}
			scale={250}
			noise={1000}
		/>
		{/* <EffectComposer > */}
			{/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.5} height={100} /> */}
			{/* <Vignette /> */}
		{/* </EffectComposer>  */}
		<Perf position="bottom-right" />
		<ambientLight color={"#ffffff"} intensity={1} />
		<directionalLight
			position={[-0.04, 4.5, -4]}
			color={"#ffffff"}
			intensity={1}
			castShadow
			shadow-mapSize={[1024, 1024]}
			shadow-camera-left={-120}
			shadow-camera-right={120}
			shadow-camera-top={120}
			shadow-camera-bottom={-120}
			shadow-camera-near={-50}
			shadow-camera-far={60}
		/>

		<Physics >
			<RigidBody type="fixed" restitution={-2} friction={0}>		
				<mesh rotation-x={-Math.PI * 0.5} scale={[10, 10, 10]} receiveShadow>
				{/* <planeGeometry args={[20, 20]} /> */}
				<circleGeometry args={[16, 50]} />
				<meshStandardMaterial color={planecolor} />
				</mesh>
			</RigidBody>
			{/* <mesh castShadow position={[0, 10, 0]}>
			<boxGeometry args={[10, 10, 10]} />
			<meshStandardMaterial color={"#fff0ff"} />
			</mesh> */}
			<RigidBody restitution={0} friction={0} sensor={true}>	
				<mesh rotation-x={-Math.PI * 0.5} position-y={0.01} receiveShadow>
					<planeGeometry args={[20, 20]} />
					<meshStandardMaterial color={floorcolor} />
				</mesh>
			</RigidBody>
			<mesh receiveShadow rotation-x={- Math.PI * 0.5} position-y={0.02}>
				<planeGeometry args={[20, 0.2]}/>
				<meshStandardMaterial color={'#FFFFFF'}/>
			</mesh>
			<mesh receiveShadow rotation-x={-Math.PI * 0.5} rotation-z={-Math.PI * 0.5} position-y={0.02}>
				<planeGeometry args={[20, 0.03]}/>
				<meshStandardMaterial color={'#FFFFFF'}/>
			</mesh>
			<mesh receiveShadow rotation-x={-Math.PI * 0.5} position-y={0.02} position-z={9.95}>
				<planeGeometry args={[20, 0.1]}/>
				<meshStandardMaterial color={'#FFFFFF'}/>
			</mesh>
			<mesh receiveShadow rotation-x={-Math.PI * 0.5} position-y={0.02} position-z={-9.95}>
				<planeGeometry args={[20, 0.1]}/>
				<meshStandardMaterial color={'#FFFFFF'}/>
			</mesh>
			<RigidBody restitution={1} friction={0} linearDamping={20} ref={playerbodyRef} enabledRotations={[false, false, false]} >
				<RoundedBox
					ref={playerRef}
					args={[3, 1, 0.3]}
					position={[0, 0.5, 9]}
					radius={0.15} 
					smoothness={4}
					bevelSegments={4}
					creaseAngle={0.4}
					castShadow
					receiveShadow
					>
					{/* <Outlines
						color={"black"}
						screenspace={false}
						opacity={1}
						transparent={false}
						thickness={0.02}
						angle={Math.PI * 0.1}
					/> */}
					{/* <MeshWobbleMaterial speed={1} factor={0.1} color={paddlecolor} /> */}
					<meshPhongMaterial color={paddlecolor}/>
				</RoundedBox>
			</RigidBody  >

			<RigidBody restitution={1} friction={0} linearDamping={20} ref={AIbodyRef} enabledRotations={[false, false, false]} >
				<RoundedBox
					ref={AIRef}
					args={[3, 1, 0.3]}
					position={[0, 0.5, -9]}
					radius={0.15} 
					smoothness={4}
					bevelSegments={4} 
					creaseAngle={0.4}
					castShadow
					receiveShadow
					>
					{/* <Outlines
						color={"black"}
						screenspace={false}
						opacity={1}
						transparent={false}
						thickness={0.02}
						angle={Math.PI * 0.1}
						/> */}
					{/* <MeshWobbleMaterial speed={1} factor={0.1} color={paddlecolor} /> */}
					<meshPhongMaterial color={paddlecolor}/>
				</RoundedBox>
			</RigidBody  >

			<Stars radius={100} depth={50} count={10000} factor={4} saturation={5} fade speed={2} />

			{/* // BALL */}
			<RigidBody colliders="ball" ref={ballbodyRef} restitution={1.2} friction={0} linearDamping={0} angularDamping={0} >
				<mesh position={[0, 0.35, 0]} ref={ballRef} castShadow receiveShadow>
					<sphereGeometry args={[0.35, 42, 16]}/>
					<meshStandardMaterial color={"white"}/>
					{/* <Outlines
						color={"black"}
						screenspace={false}
						opacity={1}
						transparent={false}
						thickness={0.01}
						angle={Math.PI * 0.1}
					/> */}
				</mesh>
			</RigidBody>

			{/* // Paddle limiter */}

			{/* <RigidBody restitution={0} friction={2} linearDamping={10} type="fixed">
				<mesh position={[6.3, 0.5, 9]} >
					<boxGeometry args={[0.01, 0.5, 0.2]} />
					<meshStandardMaterial color={"white"}/>
				</mesh>
			</RigidBody>
			<RigidBody restitution={0} friction={2} linearDamping={10} type="fixed">
				<mesh position={[-6.3, 0.5, 9]} >
					<boxGeometry args={[0.01, 0.5, 0.2]} />
					<meshStandardMaterial color={"white"}/>
				</mesh>
			</RigidBody> */}

			
			<Model3/>
			<Model2/>
			<Model1/>
		</Physics>
		
		

		{/* <Text color="White" anchorX="center" anchorY="middle" position={[-3.5, 0.05, -5.8]} scale={[6, 6, 6]} font="pixelfyfont" rotation={[Math.PI / 2, 0, 0]}>
			{p1_count}
		</Text>
		<Text color="White" anchorX="center" anchorY="middle" position={[3.5, 0.05, 4.2]} scale={[6, 6, 6]} font="pixelfyfont" rotation={[Math.PI / 2, 0, 0]}>
			{p2_count}
		</Text> */}

		{/* <axesHelper args={[10]} /> */}
		{/* <Environment files="./Game_Assets/textures/SkyEnvmap/Sky_Envmap.hdr" background /> */}
		<Sky sunPosition={sunPosition} />
		<OrbitControls />
		{/* </EffectComposer>  */}
		<SoftShadows />
		<fog attach="fog" color={fogcolor} near={1} far={180} />
	  </Canvas>
	</>
  );
};

export default Game;

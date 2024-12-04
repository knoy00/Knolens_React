//Importing Images 
import CanonRebel from '../../assets/images/Canon_rebel.webp'
import R100 from '../../assets/images/R100.webp'
import RF24 from '../../assets/images/RF24.webp'
import R5Mark2 from '../../assets/images/R5_Mark_2.webp'
import CompactCanon from '../../assets/images/compact_canon.webp'
import MiniPro from '../../assets/images/5698cb42a9a1fdce69e22f30550d9767.png'
import Air3s from '../../assets/images/77738ff32f7a228fc58b4f401261e481.png'
import Avata from '../../assets/images/97e1b5ab20211e739898969647666de1.png'
import Neo from '../../assets/images/a2d5733d4fe4b62050a3a1ea1109612d.png'

// RF200 LENSES IMG
import RF200_1 from '../../assets/images/RF-200/imageOne.webp'
import RF200_2 from '../../assets/images/RF-200/imageTwo.webp'
import RF200_3 from '../../assets/images/RF-200/imageThree.webp'
import RF200_4 from '../../assets/images/RF-200/imageFour.webp'
import RF200_5 from '../../assets/images/RF-200/imageFive.webp'

// RF200 PHOTOS TAKEN
import RF200_shot1 from '../../assets/images/Photos/city.jpg'
import RF200_shot2 from '../../assets/images/Photos/elephants.jpg'
import RF200_shot3 from '../../assets/images/Photos/lagoon.jpg'
import RF200_shot4 from '../../assets/images/Photos/shore.jpg'
import RF200_shot5 from '../../assets/images/Photos/waterfall.jpg'

// DJI Mini 4 pro images
import DjiMini4_1 from '../../assets/images/Djimini4pro_3_1.png'



export const accessories = [
    {
        id: 1,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 2,
        name: 'drones 2',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 3,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 4,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },

]



export const lenses = [
    {
        id: 1,
        name: 'Canon Lens',
        description: 'This is a camera 1',
        code: 'CNR7-T',
        price: 100,
        attribute_1: 'Comfortable handheld shooting and amazing mobility',
        attribute_2: 'Superior image quality',
        attribute_3: 'Durable and waterproof',
        attribute_4: 'Easy-to-use interface',
        attribute_5: '24-hour battery life',
        attribute_6: '18-megapixel sensor',
        attribute_7: 'Full HD video recording',
        insurance: true,
        img: RF200_1,
        img_2: RF200_2,
        img_3: RF200_3,
        img_4: RF200_4,
        img_5: RF200_5,
        disclaimer:  `* Based on CIPA (Camera & Imaging Products Association) standards. Testing performed at a focal length of 200mm using the EOS-1D X Mark II digital SLR camera.`,
        productOverview: `For portable, versatile optical excellence, look no further than the new EF 70-200mm f/4L IS II USM. It features an improved Optical Image Stabilization system that is designed to deliver up to 5 stops* of correction for clear and stable images, with the new IS Mode 3 added specifically for fast-moving, unpredictable subjects. A short minimum focusing distance of approx. 3.3 ft. helps expand the lens's operational range, enabling increased control of perspective and more dynamic close-ups than its predecessor lenses. Optimized lens coatings help reduce ghosting while a brilliant optical formula helps provide images of stunning sharpness, reduced glare and gorgeous color. All this and more in a lightweight, durable and weather-sealed L-Series lens body. Bring the EF 70-200mm f/4L IS II USM on your pursuit of your next great image.`,
        RF200_shot1: RF200_shot1,
        RF200_shot2: RF200_shot2,
        RF200_shot3: RF200_shot3,
        RF200_shot4: RF200_shot4,
        RF200_shot5: RF200_shot5,      
    },
    {
        id: 2,
        name: 'Camera 2',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 3,
        name: 'Camera 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 4,
        name: 'Camera 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },

]

export const cameras = [
    {
        id: 1,
        name: 'Canon EOS',
        description: 'CNR7-T',
        code: 'CNR7-T',
        img: CanonRebel,
        price: 900,
        attribute_1: 'Comfortable handheld shooting and amazing mobility',
        attribute_2: 'Superior image quality',
        attribute_3: 'Durable and waterproof',
        attribute_4: 'Easy-to-use interface',
        attribute_5: '24-hour battery life',
        attribute_6: '18-megapixel sensor',
        attribute_7: 'Full HD video recording',
        insurance: true

    },
    {
        id: 2,
        name: 'Camera 2',
        description: 'This is a camera 1',
        price: 100,
        img: R100,
        code: 'CNR7-T',
        attribute_1: 'Comfortable handheld shooting and amazing mobility',
        attribute_2: 'Superior image quality',
        attribute_3: 'Durable and waterproof',
        attribute_4: 'Easy-to-use interface',
        attribute_5: '24-hour battery life',
        attribute_6: '18-megapixel sensor',
        attribute_7: 'Full HD video recording',
        insurance: true

    },
    {
        id: 3,
        name: 'Camera 1',
        description: 'This is a camera 1',
        price: 100,
        img: RF24,
        attribute_1: 'Comfortable handheld shooting and amazing mobility',
        attribute_2: 'Superior image quality',
        attribute_3: 'Durable and waterproof',
        attribute_4: 'Easy-to-use interface',
        attribute_5: '24-hour battery life',
        attribute_6: '18-megapixel sensor',
        attribute_7: 'Full HD video recording',
        insurance: true
    },
    {
        id: 4,
        name: 'Camera 1',
        description: 'This is a camera 1',
        price: 100,
        img: R5Mark2,
        attribute_1: 'Comfortable handheld shooting and amazing mobility',
        attribute_2: 'Superior image quality',
        attribute_3: 'Durable and waterproof',
        attribute_4: 'Easy-to-use interface',
        attribute_5: '24-hour battery life',
        attribute_6: '18-megapixel sensor',
        attribute_7: 'Full HD video recording',
        insurance: true
    },

]

export const drones = [
    {
        id: 1,
        name: 'DJI Mini 4 Pro',
        description: '',
        price: 100,
        img: MiniPro,
        img_2: DjiMini4_1
    },
    {
        id: 2,
        name: 'drones 2',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 3,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },    
    {
        id: 4,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,    
    }

]

export const salesOff = [
    {
        id: 1,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 2,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 3,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 4,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },

]

export const AdOne = [
    {
        id: 1,
        img: CompactCanon,
        title: "Want To Make Long Lasting Memories?",
        description: "Shop our compact and lightweight cameras for all your photography needs"
    }
]

export const RF200_1_shots = [
    {
        id: 1,
        img: RF200_1,
        alt: 'City'
    },
    {
        id: 2,
        img: RF200_2,
        alt: 'Mountains'
    },
    {
        id: 3,
        img: RF200_3,
        alt: 'Beach'
    }
]


export const SeeAlsoDrones = [
    {
        id: 1,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 2,
        name: 'drones 2',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 3,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 4,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },

]



export const S_A_Lens = [
    {
        id: 1,
        name: 'Canon Lens',
        description: 'This is a camera 1',
        code: 'CNR7-T',
        price: 100,
        attribute_1: 'Comfortable handheld shooting and amazing mobility',
        attribute_2: 'Superior image quality',
        attribute_3: 'Durable and waterproof',
        attribute_4: 'Easy-to-use interface',
        attribute_5: '24-hour battery life',
        attribute_6: '18-megapixel sensor',
        attribute_7: 'Full HD video recording',
        insurance: true,
        img: RF200_1,
        img_2: RF200_2,
        img_3: RF200_3,
        img_4: RF200_4,
        img_5: RF200_5,
        disclaimer:  `* Based on CIPA (Camera & Imaging Products Association) standards. Testing performed at a focal length of 200mm using the EOS-1D X Mark II digital SLR camera.`,
        productOverview: `For portable, versatile optical excellence, look no further than the new EF 70-200mm f/4L IS II USM. It features an improved Optical Image Stabilization system that is designed to deliver up to 5 stops* of correction for clear and stable images, with the new IS Mode 3 added specifically for fast-moving, unpredictable subjects. A short minimum focusing distance of approx. 3.3 ft. helps expand the lens's operational range, enabling increased control of perspective and more dynamic close-ups than its predecessor lenses. Optimized lens coatings help reduce ghosting while a brilliant optical formula helps provide images of stunning sharpness, reduced glare and gorgeous color. All this and more in a lightweight, durable and weather-sealed L-Series lens body. Bring the EF 70-200mm f/4L IS II USM on your pursuit of your next great image.`,
        RF200_shot1: RF200_shot1,
        RF200_shot2: RF200_shot2,
        RF200_shot3: RF200_shot3,
        RF200_shot4: RF200_shot4,
        RF200_shot5: RF200_shot5,      
    },
    {
        id: 2,
        name: 'Camera 2',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 3,
        name: 'Camera 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 4,
        name: 'Camera 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },

]



export const jj = [
    {
        id: 1,
        name: 'Canon Lens',
        description: 'This is a camera 1',
        code: 'CNR7-T',
        price: 100,
        attribute_1: 'Comfortable handheld shooting and amazing mobility',
        attribute_2: 'Superior image quality',
        attribute_3: 'Durable and waterproof',
        attribute_4: 'Easy-to-use interface',
        attribute_5: '24-hour battery life',
        attribute_6: '18-megapixel sensor',
        attribute_7: 'Full HD video recording',
        insurance: true,
        img: RF200_1,
        img_2: RF200_2,
        img_3: RF200_3,
        img_4: RF200_4,
        img_5: RF200_5,
        disclaimer:  `* Based on CIPA (Camera & Imaging Products Association) standards. Testing performed at a focal length of 200mm using the EOS-1D X Mark II digital SLR camera.`,
        productOverview: `For portable, versatile optical excellence, look no further than the new EF 70-200mm f/4L IS II USM. It features an improved Optical Image Stabilization system that is designed to deliver up to 5 stops* of correction for clear and stable images, with the new IS Mode 3 added specifically for fast-moving, unpredictable subjects. A short minimum focusing distance of approx. 3.3 ft. helps expand the lens's operational range, enabling increased control of perspective and more dynamic close-ups than its predecessor lenses. Optimized lens coatings help reduce ghosting while a brilliant optical formula helps provide images of stunning sharpness, reduced glare and gorgeous color. All this and more in a lightweight, durable and weather-sealed L-Series lens body. Bring the EF 70-200mm f/4L IS II USM on your pursuit of your next great image.`,
        RF200_shot1: RF200_shot1,
        RF200_shot2: RF200_shot2,
        RF200_shot3: RF200_shot3,
        RF200_shot4: RF200_shot4,
        RF200_shot5: RF200_shot5,      
    },
    {
        id: 2,
        name: 'Camera 2',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 3,
        name: 'Camera 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
    {
        id: 4,
        name: 'Camera 1',
        description: 'This is a camera 1',
        price: 100,
        discount: 0,
    },
]

export const allProducts =[
    {
        id: 1,
        category: 'Camera',
        name: 'Canon EOS 5D Mark IV',
        description: 'This is a camera 1',
        price: 1000,
        discount: 0,
    },
    {
        id: 2,
        category: 'Camera',
        name: 'Canon EOS 5D Mark IV',
        description: 'This is a camera 1',
        price: 1000,
        discount: 0,
    },
    {
        id: 3,
        category: 'Camera',
        name: 'Canon EOS 5D Mark IV',
        description: 'This is a camera 1',
        price: 1000,
        discount: 0,
    },
    {
        id: 4,
        category: 'Camera',
        name: 'Canon EOS 5D Mark IV',
        description: 'This is a camera 1',
        price: 1000,
        discount: 0,
    },
    {
        id: 5,
        category: 'Lens',
        name: 'Canon EF 70-200mm f/4L IS II USM',
        description: 'This is a camera 1',
        price: 1000,
        discount: 0,
    },
    {
        id: 6,
        category: 'Lens',
        name: 'Canon EF 70-200mm f/4L IS II USM',
        description: 'This is a camera 1',
        price: 1000,
        discount: 0,
    },
    {
        id: 7,
        category: 'Lens',
        name: 'Canon EF 70-200mm f/4L IS II USM',
        description: 'This is a camera 1',
        price: 1000,
        discount: 0,
    },
    {
        id: 8,
        category: 'Lens',
        name: 'Canon EF 70-200mm f/4L IS II USM',
        description: 'This is a camera 1',
        price: 1000,
        discount: 0,
    },
    {
        id: 9,
        category: 'Drones',
        name: 'Mavic Mini 2',
        description: 'This is a Drone 1',
        price: 1000,
        discount: 0,
    },
    {
        id: 10,
        category: 'Drones',
        name: 'Mavic Mini 3',
        description: 'This is a Drone 1',
        price: 1000,
        discount: 0,
    },
    {
        id: 11,
        category: 'Drones',
        name: 'Mavic Pro 2',
        description: 'This is a Drone 3',
        price: 1000,
        discount: 0,
    },
    {
        id: 12,
        category: 'Drones',
        name: 'Mavic Mini 2',
        description: 'This is a Drone 1',
        price: 1000,
        discount: 0,
    },   
]
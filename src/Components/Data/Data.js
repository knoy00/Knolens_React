//Importing Images 
import CanonRebel from '../../assets/images/Canon_rebel.webp'
import R100 from '../../assets/images/R100.webp'
import RF24 from '../../assets/images/RF24.webp'
import R5Mark2 from '../../assets/images/R5_Mark_2.webp'
import CompactCanon from '../../assets/images/compact_canon.webp'
import MiniPro from '../../assets/images/5698cb42a9a1fdce69e22f30550d9767.png'
// import Air3s from '../../assets/images/77738ff32f7a228fc58b4f401261e481.png'
// import Avata from '../../assets/images/97e1b5ab20211e739898969647666de1.png'
// import Neo from '../../assets/images/a2d5733d4fe4b62050a3a1ea1109612d.png'

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

// EF11-24 lenses images
import EF11_24_1 from '../../assets/images/EF11-24/EF11-24_1.webp'
import EF11_24_2 from '../../assets/images/EF11-24/EF11-24_2.webp'

//EF8-15 lenses images
import EF8_15_1 from '../../assets/images/EF8-15/EF8-15_1.webp'
import EF8_15_2 from '../../assets/images/EF8-15/EF8-15_2.webp'

// RF-1200 Lens
import RF1200_1 from '../../assets/images/RF-1200/RF-1200_1.webp'
import RF1200_2 from '../../assets/images/RF-1200/RF-1200_2.webp'
import RF1200_3 from '../../assets/images/RF-1200/RF-1200_3.webp'
import RF1200_4 from '../../assets/images/RF-1200/RF-1200_4.webp'
import RF1200_5 from '../../assets/images/RF-1200/RF-1200_5.webp'


// Drone images
import Drone1 from '../../assets/images/97e1b5ab20211e739898969647666de1.png'
import Drone2 from '../../assets/images/a2d5733d4fe4b62050a3a1ea1109612d.png'
import Drone3 from '../../assets/images/77738ff32f7a228fc58b4f401261e481.png'
// import Drone4 from '../../assets/images/5698cb42a9a1fdce69e22f30550d9767.png'

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
        type: 'lenses',
        name: 'Canon Lens',
        description: 'A high-performance telephoto zoom lens with excellent image stabilization and optical quality.',
        code: 'CNR7-T',
        price: 900,
        attribute_1: 'Comfortable handheld shooting and amazing mobility',
        attribute_2: 'Superior image quality',
        attribute_3: 'Durable and weather-resistant',
        attribute_4: 'Advanced autofocus system',
        attribute_5: 'Enhanced light transmission',
        attribute_6: '18-element optical design',
        attribute_7: 'Full HD video recording capability',
        insurance: true,
        img: RF200_1,
        img_2: RF200_2,
        img_3: RF200_3,
        img_4: RF200_4,
        img_5: RF200_5,
        disclaimer: `* Based on CIPA (Camera & Imaging Products Association) standards. Testing performed at a focal length of 200mm using the EOS-1D X Mark II digital SLR camera.`,
        productOverview: `For portable, versatile optical excellence, look no further than the new EF 70-200mm f/4L IS II USM. It features an improved Optical Image Stabilization system that is designed to deliver up to 5 stops* of correction for clear and stable images.`
    },
    {
        id: 2,
        type: 'lenses',
        name: 'Canon Lens',
        description: 'A premium wide-angle zoom lens with superior optical performance and clarity.',
        code: 'EF11-23',
        price: 2200,
        attribute_1: 'Wide-angle focal range',
        attribute_2: 'Excellent low-light performance',
        attribute_3: 'Durable and weather-resistant',
        attribute_4: 'High-speed autofocus',
        attribute_5: 'Minimal distortion',
        attribute_6: 'Aspherical lens elements',
        attribute_7: 'Superior edge-to-edge sharpness',
        insurance: true,
        img: EF11_24_1,
        img_2: EF11_24_2,
        img_3: '',
        img_4: '',
        img_5: '',
        disclaimer: `* Based on CIPA standards. Testing performed at a focal length of 11-23mm.`
    },
    {
        id: 3,
        type: 'lenses',
        name: 'Canon Lens',
        description: 'A compact fisheye lens designed for stunning wide-angle shots with minimal distortion.',
        code: 'EF8-15',
        price: 100,
        attribute_1: 'Ultra-wide fisheye view',
        attribute_2: 'Multi-layer coating for reduced flare',
        attribute_3: 'Dust and moisture-resistant',
        attribute_4: 'Circular 7-blade aperture',
        attribute_5: 'High-quality optical glass elements',
        attribute_6: 'Compatible with full-frame and APS-C sensors',
        attribute_7: 'Compact and lightweight design',
        insurance: true,
        img: EF8_15_1,
        img_2: EF8_15_2,
        img_3: '',
        img_4: '',
        img_5: '',
        disclaimer: `* Based on CIPA standards. Testing performed at a focal length of 11-23mm.`

    },
    {
        id: 4,
        type: 'lenses',
        name: 'Canon Lens',
        description: 'A professional-grade super-telephoto lens ideal for wildlife and sports photography.',
        code: 'RF-1200',
        price: 2240,
        attribute_1: 'Super-telephoto reach',
        attribute_2: 'Advanced image stabilization',
        attribute_3: 'Fast and silent autofocus',
        attribute_4: 'Superior contrast and color accuracy',
        attribute_5: 'Optimized for high-speed shooting',
        attribute_6: 'Nano USM motor for smooth focusing',
        attribute_7: 'Weather-sealed construction',
        insurance: true,
        img: RF1200_1,
        img_2: RF1200_2,
        img_3: RF1200_3,
        img_4: RF1200_4,
        img_5: RF1200_5,
        disclaimer: `* Based on CIPA standards. Testing performed at a focal length of 11-23mm.`

    },
    {
        id: 6,
        name: 'Canon Lens',
        description: 'A high-performance zoom lens with exceptional sharpness and clarity.',
        price: 1800,
        img: '',
        img_2: '',
        img_3: '',
        img_4: '',
        img_5: '',
        attribute_1: 'Advanced optical design for superior image quality',
        attribute_2: 'Fast and silent autofocus for smooth operation',
        attribute_3: 'Weather-sealed for durability in tough conditions',
        attribute_4: 'Customizable control ring for quick adjustments',
        attribute_5: 'Large aperture for stunning depth of field',
        attribute_6: 'Coating to minimize ghosting and flare',
        attribute_7: 'Ideal for portrait photography',
        code: 'RF85-F1.2',
        insurance: true,
        disclaimer: `* Based on CIPA standards. Testing performed at a focal length of 11-23mm.`

    },
    {
        id: 7,
        name: 'Canon Lens',
        description: 'A compact and lightweight lens ideal for travel and street photography.',
        price: 1200,
        img: '',
        img_2: '',
        img_3: '',
        img_4: '',
        img_5: '',
        attribute_1: 'Compact and lightweight design for portability',
        attribute_2: 'Fast aperture for low-light performance',
        attribute_3: 'Close focusing capability for macro shots',
        attribute_4: 'Image stabilization for sharper handheld shots',
        attribute_5: 'Silent motor for video recording',
        attribute_6: 'Aspherical elements to reduce distortion',
        attribute_7: 'Great for street and documentary photography',
        code: 'RF35-M1.8',
        insurance: true,
        disclaimer: `* Based on CIPA standards. Testing performed at a focal length of 11-23mm.`

    },
    {
        id: 8,
        name: 'Canon Lens',
        description: 'A telephoto zoom lens designed for sports and wildlife photography.',
        price: 2500,
        img: '',
        img_2: '',
        img_3: '',
        img_4: '',
        img_5: '',
        attribute_1: 'Powerful zoom range for distant subjects',
        attribute_2: 'Optical image stabilization for steady shots',
        attribute_3: 'Fast autofocus with subject tracking',
        attribute_4: 'Lightweight for extended handheld use',
        attribute_5: 'Fluorine coating to reduce smudges',
        attribute_6: 'Weather-resistant for outdoor shooting',
        attribute_7: 'Compatible with teleconverters for extra reach',
        code: 'RF100-400-F5.6',
        insurance: true,
        disclaimer: `* Based on CIPA standards. Testing performed at a focal length of 11-23mm.`

    },
    {
        id: 9,
        name: 'Canon Lens',
        description: 'A professional-grade lens for stunning landscape and architectural photography.',
        price: 3000,
        img: "",
        img_2: '',
        img_3: '',
        img_4: '',
        img_5: '',
        attribute_1: 'Ultra-wide-angle for expansive scenes',
        attribute_2: 'Edge-to-edge sharpness with minimal distortion',
        attribute_3: 'Quiet autofocus for seamless video recording',
        attribute_4: 'Weather-sealed construction for durability',
        attribute_5: 'Fluorine coating for easy cleaning',
        attribute_6: 'Reduced chromatic aberration with UD elements',
        attribute_7: 'Great for astrophotography and interiors',
        code: 'RF14-35-F4L',
        insurance: true,
        disclaimer: `* Based on CIPA standards. Testing performed at a focal length of 11-23mm.`

    }
    
];


export const cameras = [
    {
        id: 1,
        type: 'cameras',
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
        name: 'Camera 3',
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
        name: 'Camera 4',
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
    {
        id: 5,
        name: 'Camera 5',
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
    {
        id: 6,
        name: 'Camera 6',
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
    {
        id: 7,
        name: 'Camera 7',
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
    {
        id: 8,
        name: 'Camera 8',
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
    {
        id: 9,
        name: 'Camera 9',
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
    {
        id: 10,
        name: 'Camera 10',
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
    {
        id: 11,
        name: 'Camera 11',
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
    {
        id: 12,
        name: 'Camera 12',
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
    {
        id: 13,
        name: 'Camera 13',
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
    {
        id: 14,
        name: 'Camera 14',
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
    {
        id: 15,
        name: 'Camera 15',
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
        type: 'drones',
        name: 'DJI Mini 4 Pro',
        description: '',
        price: 2500,
        img: MiniPro,
        img_2: DjiMini4_1,
        attribute_1: 'Comfortable and easy to pilot',
        attribute_2: 'High-resolution video recording',
        attribute_3: 'Compact and lightweight',
        attribute_4: 'Easy-to-use interface',
        attribute_5: 'Long battery life',
        attribute_6: '24-megapixel sensor',
        insurance: true,
        code: 'DJI-T2XR',
        disclaimer: '*Based on the DJI Mini 4 Pro specs and features'
    },
    {
        id: 2,
        name: 'drones 2',
        description: 'This is a camera 1',
        price: 100,
        img: Drone1,
        attribute_1: 'Comfortable and easy to pilot',
        attribute_2: 'High-resolution video recording',
        attribute_3: 'Compact and lightweight',
        attribute_4: 'Easy-to-use interface',
        attribute_5: 'Long battery life',
        attribute_6: '24-megapixel sensor',
        insurance: true,
        code: 'DJI-T200'
        
    },
    {
        id: 3,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        img: Drone2,
        attribute_1: 'Comfortable and easy to pilot',
        attribute_2: 'High-resolution video recording',
        attribute_3: 'Compact and lightweight',
        attribute_4: 'Easy-to-use interface',
        attribute_5: 'Long battery life',
        attribute_6: '24-megapixel sensor',
        insurance: true,
        code: 'DJI-M30'
    },    
    {
        id: 4,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        img: Drone3,
        attribute_1: 'Comfortable and easy to pilot',
        attribute_2: 'High-resolution video recording',
        attribute_3: 'Compact and lightweight',
        attribute_4: 'Easy-to-use interface',
        attribute_5: 'Long battery life',
        attribute_6: '24-megapixel sensor',
        insurance: true,
        code: 'DJI-Mavic-TS3'
    },
    {
        id: 5,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        img: Drone3,
        attribute_1: 'Comfortable and easy to pilot',
        attribute_2: 'High-resolution video recording',
        attribute_3: 'Compact and lightweight',
        attribute_4: 'Easy-to-use interface',
        attribute_5: 'Long battery life',
        attribute_6: '24-megapixel sensor',
        insurance: true,
        code: 'DJI-Mavic-TS3'
    },
    {
        id: 6,
        name: 'drones 2',
        description: 'This is a camera 1',
        price: 100,
        img: Drone1,
        attribute_1: 'Comfortable and easy to pilot',
        attribute_2: 'High-resolution video recording',
        attribute_3: 'Compact and lightweight',
        attribute_4: 'Easy-to-use interface',
        attribute_5: 'Long battery life',
        attribute_6: '24-megapixel sensor',
        insurance: true,
        code: 'DJI-T200'
        
    },
    {
        id: 7,
        type: 'drones',
        name: 'DJI Mini 4 Pro',
        description: '',
        price: 2500,
        img: MiniPro,
        img_2: DjiMini4_1,
        attribute_1: 'Comfortable and easy to pilot',
        attribute_2: 'High-resolution video recording',
        attribute_3: 'Compact and lightweight',
        attribute_4: 'Easy-to-use interface',
        attribute_5: 'Long battery life',
        attribute_6: '24-megapixel sensor',
        insurance: true,
        code: 'DJI-T2XR',
        disclaimer: '*Based on the DJI Mini 4 Pro specs and features'
    },
    {
        id: 8,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        img: Drone2,
        attribute_1: 'Comfortable and easy to pilot',
        attribute_2: 'High-resolution video recording',
        attribute_3: 'Compact and lightweight',
        attribute_4: 'Easy-to-use interface',
        attribute_5: 'Long battery life',
        attribute_6: '24-megapixel sensor',
        insurance: true,
        code: 'DJI-M30'
    },
    {
        id: 9,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        img: Drone2,
        attribute_1: 'Comfortable and easy to pilot',
        attribute_2: 'High-resolution video recording',
        attribute_3: 'Compact and lightweight',
        attribute_4: 'Easy-to-use interface',
        attribute_5: 'Long battery life',
        attribute_6: '24-megapixel sensor',
        insurance: true,
        code: 'DJI-M30'
    },    
    {
        id: 10,
        name: 'drones 1',
        description: 'This is a camera 1',
        price: 100,
        img: Drone2,
        attribute_1: 'Comfortable and easy to pilot',
        attribute_2: 'High-resolution video recording',
        attribute_3: 'Compact and lightweight',
        attribute_4: 'Easy-to-use interface',
        attribute_5: 'Long battery life',
        attribute_6: '24-megapixel sensor',
        insurance: true,
        code: 'DJI-M30'
    },        

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
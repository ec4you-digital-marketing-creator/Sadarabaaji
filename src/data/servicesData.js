import { images } from "./images";

export const servicesData = [
    {
        id: 'detailing',
        title: 'Car Detailing & Interior Cleaning',
        tier: 'Interior & Exterior restoration',
        icon: 'sparkles',
        desc: 'Advanced car detailing designed to restore your vehicle’s original shine and freshness. Includes deep interior cleaning, dashboard polishing, and premium paint protection.',
        image: images.detail,
        stats: { tech: 'Premium Grade', safety: 'Scratch-Free', finish: 'Showroom' },
        points: [
            'Interior vacuum & deep cleaning', 
            'Dashboard & console polishing', 
            'Seat shampooing & stain removal', 
            'Exterior foam wash & wax polishing', 
            'Paint enhancement treatment'
        ],
        perfectFor: 'Luxury cars, daily-use vehicles, resale preparation & showroom finish restoration.'
    },
    {
        id: 'water_wash',
        title: 'High-Pressure Water Wash',
        tier: 'Foam wash',
        icon: 'droplets',
        desc: 'High-pressure foam wash system removes dirt, mud, and road contaminants without damaging paint. pH-balanced shampoo and microfiber drying prevent swirl marks.',
        image: images.wash,
        stats: { system: 'High-Pressure', type: 'pH-Balanced', speed: 'Rapid' },
        points: [
            'Pre-rinse & snow foam wash', 
            'Underbody wash service will not be included', 
            'Alloy wheel & tyre cleaning', 
            'Spot-free hand drying', 
            'Final gloss finishing spray'
        ],
        perfectFor: 'Fast and affordable cleaning for all car models.'
    },
    {
        id: 'accessories',
        title: 'Accessories & Upgrades',
        tier: 'Premium Custom fitment',
        icon: 'settings',
        desc: 'Professional installation of high-quality automotive accessories that improve safety, comfort, and vehicle aesthetics. Expert workmanship for a perfect fitment.',
        image: images.accessories,
        stats: { quality: 'High-Grade', fitment: 'Professional', style: 'Custom' },
        points: [
            'Seat covers & floor mats', 
            'Reverse camera & parking sensors', 
            'LED lights & fog lamps', 
            'Car audio systems', 
            'Chrome & styling accessories'
        ],
        perfectFor: 'Enhancing safety, comfort, and aesthetics with trusted products.'
    },
    {
        id: 'under_chassis',
        title: 'Chassis Coating & Anti-Rust',
        tier: 'Underbody armor protection',
        icon: 'shield-check',
        desc: 'Professional under chassis painting and anti-rust coating creates a strong barrier against moisture, salt, and dirt. Protect your vehicle from Chennai’s weather.',
        image: images.chassis,
        stats: { protection: 'Anti-Rust', barrier: 'Moisture/Salt', durability: 'Extending' },
        points: [
            'Rust & corrosion prevention', 
            'Extended vehicle lifespan', 
            'Reduced maintenance cost', 
            'Enhanced underbody durability', 
            'Improved resale value'
        ],
        perfectFor: 'New cars and long-term vehicle protection.'
    }
];
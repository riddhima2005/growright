 import { 
   Droplets, 
   Sun, 
   Thermometer, 
   Scissors, 
   Plus,
   Clock
 } from "lucide-react";
 
 export interface Step {
   id: number;
   title: string;
   description: string;
   completed: boolean;
   required: boolean;
   icon: any;
 }
 
 export interface PlantInfo {
   name: string;
   category: string;
   difficulty: string;
   season: string;
   description: string;
   careTips: {
     water: string;
     sunlight: string;
     soilPH: string;
     fertilizer: string;
   };
   steps: Step[];
 }
 
 export const plantData: { [key: string]: PlantInfo } = {
   // VEGETABLES
   "1": {
     name: "Tomato",
     category: "vegetables",
     difficulty: "beginner",
     season: "spring",
     description: "A nutritious and versatile vegetable perfect for beginners. Tomatoes thrive in warm weather and produce abundant fruit when cared for properly.",
     careTips: {
       water: "Water deeply 2-3 times per week. Keep soil consistently moist but not waterlogged.",
       sunlight: "6-8 hours of direct sunlight daily. Position in the sunniest spot of your garden.",
       soilPH: "6.0-6.8 pH. Slightly acidic to neutral soil works best.",
       fertilizer: "Apply balanced fertilizer every 2-3 weeks during growing season."
     },
     steps: [
       { id: 1, title: "Prepare Soil", description: "Mix compost into garden bed, ensure good drainage", completed: false, required: true, icon: Thermometer },
       { id: 2, title: "Plant Seeds", description: "Plant seeds 1/4 inch deep in seed starter trays", completed: false, required: true, icon: Plus },
       { id: 3, title: "Water Seedlings", description: "Keep soil moist but not soggy for germination", completed: false, required: true, icon: Droplets },
       { id: 4, title: "Transplant", description: "Move seedlings outdoors after last frost date", completed: false, required: true, icon: Sun },
       { id: 5, title: "Install Support", description: "Add stakes or cages for vine support", completed: false, required: true, icon: Scissors },
       { id: 6, title: "Regular Watering", description: "Maintain consistent watering schedule", completed: false, required: false, icon: Droplets },
       { id: 7, title: "Pruning", description: "Remove suckers and lower leaves regularly", completed: false, required: false, icon: Scissors },
     ]
   },
   "7": {
     name: "Potato",
     category: "vegetables",
     difficulty: "beginner",
     season: "spring",
     description: "A staple root vegetable that's surprisingly easy to grow. Potatoes are rewarding for beginners and produce abundantly with proper hilling technique.",
     careTips: {
       water: "Water consistently, about 1-2 inches per week. Keep soil evenly moist but not waterlogged.",
       sunlight: "Full sun, 6-8 hours daily. Tubers form underground so focus on healthy foliage.",
       soilPH: "5.0-6.5 pH. Slightly acidic soil prevents scab disease.",
       fertilizer: "Apply low-nitrogen fertilizer at planting. Too much nitrogen promotes foliage over tubers."
     },
     steps: [
       { id: 1, title: "Prepare Seed Potatoes", description: "Cut seed potatoes into pieces with 2-3 eyes each, let dry 1-2 days", completed: false, required: true, icon: Scissors },
       { id: 2, title: "Dig Trenches", description: "Create 6-inch deep trenches, spaced 2-3 feet apart", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Plant Potatoes", description: "Place seed pieces 12 inches apart, eyes facing up", completed: false, required: true, icon: Plus },
       { id: 4, title: "Initial Cover", description: "Cover with 4 inches of soil, water thoroughly", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Hill Potatoes", description: "Mound soil around stems when plants are 6 inches tall", completed: false, required: true, icon: Thermometer },
       { id: 6, title: "Continue Hilling", description: "Repeat hilling as plants grow, keeping tubers covered", completed: false, required: false, icon: Thermometer },
       { id: 7, title: "Monitor for Pests", description: "Check for Colorado potato beetles and remove by hand", completed: false, required: false, icon: Clock },
     ]
   },
   "8": {
     name: "Onion",
     category: "vegetables",
     difficulty: "beginner",
     season: "spring",
     description: "Essential kitchen staple that stores well. Onions are easy to grow from sets and require minimal maintenance once established.",
     careTips: {
       water: "Water 1 inch per week. Stop watering when tops begin to fall over.",
       sunlight: "Full sun, 6-8 hours daily. Day length affects bulb formation.",
       soilPH: "6.0-7.0 pH. Well-draining, loose soil prevents rot.",
       fertilizer: "Apply nitrogen-rich fertilizer every few weeks until bulbing begins."
     },
     steps: [
       { id: 1, title: "Choose Onion Type", description: "Select short-day or long-day varieties based on your region", completed: false, required: true, icon: Sun },
       { id: 2, title: "Prepare Bed", description: "Loosen soil 6 inches deep, mix in compost", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Plant Sets or Transplants", description: "Plant 1 inch deep, 4-6 inches apart in rows", completed: false, required: true, icon: Plus },
       { id: 4, title: "Water Consistently", description: "Keep soil moist but not waterlogged", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Mulch Around Plants", description: "Apply thin layer of mulch to retain moisture and suppress weeds", completed: false, required: true, icon: Thermometer },
       { id: 6, title: "Stop Watering at Maturity", description: "When tops fall over, stop watering and let cure", completed: false, required: false, icon: Clock },
     ]
   },
   "9": {
     name: "Carrot",
     category: "vegetables",
     difficulty: "intermediate",
     season: "spring",
     description: "Sweet and crunchy root vegetable rich in vitamins. Carrots need loose soil for straight roots and patience for germination.",
     careTips: {
       water: "Water deeply and consistently. Uneven watering causes cracking.",
       sunlight: "Full sun to partial shade, 6+ hours of light.",
       soilPH: "6.0-6.8 pH. Deep, loose, sandy soil without rocks.",
       fertilizer: "Low nitrogen, higher phosphorus and potassium for root development."
     },
     steps: [
       { id: 1, title: "Prepare Deep Bed", description: "Loosen soil 12 inches deep, remove all rocks and debris", completed: false, required: true, icon: Thermometer },
       { id: 2, title: "Sow Seeds Thinly", description: "Sprinkle seeds 1/4 inch deep, cover lightly with fine soil", completed: false, required: true, icon: Plus },
       { id: 3, title: "Keep Moist", description: "Mist daily until germination (2-3 weeks)", completed: false, required: true, icon: Droplets },
       { id: 4, title: "Thin Seedlings", description: "Thin to 2-3 inches apart when tops are 2 inches tall", completed: false, required: true, icon: Scissors },
       { id: 5, title: "Mulch Heavily", description: "Apply mulch to keep soil cool and retain moisture", completed: false, required: true, icon: Thermometer },
       { id: 6, title: "Hill Soil", description: "Cover exposed carrot shoulders to prevent greening", completed: false, required: false, icon: Thermometer },
       { id: 7, title: "Harvest Test", description: "Pull a test carrot to check size before full harvest", completed: false, required: false, icon: Clock },
     ]
   },
   "10": {
     name: "Spinach",
     category: "vegetables",
     difficulty: "beginner",
     season: "spring",
     description: "Nutritious leafy green that grows quickly in cool weather. Perfect for beginners wanting fast results and multiple harvests.",
     careTips: {
       water: "Keep soil consistently moist. Water at base to prevent leaf disease.",
       sunlight: "Partial shade to full sun, 3-6 hours. Prefers cooler conditions.",
       soilPH: "6.5-7.5 pH. Rich, well-draining soil with high nitrogen.",
       fertilizer: "Apply nitrogen-rich fertilizer every 2-3 weeks for leafy growth."
     },
     steps: [
       { id: 1, title: "Choose Location", description: "Select spot with morning sun and afternoon shade", completed: false, required: true, icon: Sun },
       { id: 2, title: "Prepare Soil", description: "Mix in compost and ensure good drainage", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Sow Seeds", description: "Plant seeds 1/2 inch deep, 2 inches apart", completed: false, required: true, icon: Plus },
       { id: 4, title: "Water Gently", description: "Keep soil moist, water at base of plants", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Thin Seedlings", description: "Thin to 4-6 inches apart when leaves appear", completed: false, required: true, icon: Scissors },
       { id: 6, title: "Harvest Outer Leaves", description: "Pick outer leaves first to encourage continued growth", completed: false, required: false, icon: Scissors },
     ]
   },
   "11": {
     name: "Cabbage",
     category: "vegetables",
     difficulty: "intermediate",
     season: "spring",
     description: "Hardy cool-season vegetable that forms tight heads. Cabbages are versatile in cooking and store well for months.",
     careTips: {
       water: "Water consistently, 1-2 inches per week. Mulch to retain moisture.",
       sunlight: "Full sun, 6+ hours daily for best head formation.",
       soilPH: "6.5-7.0 pH. Rich, firm soil with good drainage.",
       fertilizer: "Heavy feeder - apply balanced fertilizer every 3-4 weeks."
     },
     steps: [
       { id: 1, title: "Start Indoors", description: "Start seeds indoors 6-8 weeks before last frost", completed: false, required: true, icon: Plus },
       { id: 2, title: "Harden Seedlings", description: "Gradually expose to outdoor conditions over 1 week", completed: false, required: true, icon: Sun },
       { id: 3, title: "Transplant", description: "Plant seedlings 18-24 inches apart in firm soil", completed: false, required: true, icon: Plus },
       { id: 4, title: "Water Deeply", description: "Water at base, keep soil consistently moist", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Apply Mulch", description: "Mulch around plants to maintain moisture and cool roots", completed: false, required: true, icon: Thermometer },
       { id: 6, title: "Check for Pests", description: "Monitor for cabbage worms and aphids", completed: false, required: false, icon: Clock },
       { id: 7, title: "Harvest at Maturity", description: "Cut head when firm, leaving outer leaves for protection", completed: false, required: false, icon: Scissors },
     ]
   },
   "12": {
     name: "Cauliflower",
     category: "vegetables",
     difficulty: "advanced",
     season: "spring",
     description: "Challenging but rewarding brassica that produces beautiful white heads. Requires consistent care and blanching for best results.",
     careTips: {
       water: "Water consistently, 1-2 inches per week. Stress causes premature heading.",
       sunlight: "Full sun, 6+ hours. Protect from extreme heat.",
       soilPH: "6.0-7.0 pH. Rich, fertile soil with excellent drainage.",
       fertilizer: "Heavy feeder - apply high-nitrogen fertilizer regularly."
     },
     steps: [
       { id: 1, title: "Start Seeds Indoors", description: "Start 6-8 weeks before transplanting date", completed: false, required: true, icon: Plus },
       { id: 2, title: "Harden Off", description: "Gradually acclimate seedlings to outdoor conditions", completed: false, required: true, icon: Sun },
       { id: 3, title: "Transplant Carefully", description: "Space 18-24 inches apart, handle roots gently", completed: false, required: true, icon: Plus },
       { id: 4, title: "Consistent Watering", description: "Never let soil dry out, water deeply and regularly", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Apply Heavy Mulch", description: "Keep roots cool with 3-4 inches of organic mulch", completed: false, required: true, icon: Thermometer },
       { id: 6, title: "Blanch the Head", description: "Tie outer leaves over head when 2-3 inches wide to keep white", completed: false, required: true, icon: Scissors },
       { id: 7, title: "Monitor Temperature", description: "Protect from frost and extreme heat", completed: false, required: false, icon: Clock },
     ]
   },
 
   // FLOWERS
   "2": {
     name: "Rose",
     category: "flowers", 
     difficulty: "intermediate",
     season: "all",
     description: "Classic garden flower known for its beauty and fragrance. Roses require more attention but reward you with stunning blooms.",
     careTips: {
       water: "Deep watering once or twice per week. Water at soil level to prevent leaf diseases.",
       sunlight: "6+ hours of morning sunlight. Good air circulation is essential.",
       soilPH: "6.0-7.0 pH. Well-draining, fertile soil enriched with organic matter.",
       fertilizer: "Feed with rose fertilizer in spring and mid-summer."
     },
     steps: [
       { id: 1, title: "Choose Location", description: "Select sunny spot with good air circulation", completed: false, required: true, icon: Sun },
       { id: 2, title: "Prepare Soil", description: "Amend soil with compost and ensure drainage", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Plant Rose", description: "Plant at proper depth with graft union at soil level", completed: false, required: true, icon: Plus },
       { id: 4, title: "Initial Watering", description: "Water thoroughly after planting", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Mulching", description: "Apply 2-3 inches of organic mulch around base", completed: false, required: true, icon: Thermometer },
       { id: 6, title: "Regular Care", description: "Maintain watering and feeding schedule", completed: false, required: false, icon: Droplets },
     ]
   },
   "13": {
     name: "Sunflower",
     category: "flowers",
     difficulty: "beginner",
     season: "summer",
     description: "Cheerful, towering flowers that follow the sun. Sunflowers are incredibly easy to grow and attract pollinators while producing edible seeds.",
     careTips: {
       water: "Water deeply once a week. More frequent watering during hot, dry periods.",
       sunlight: "Full sun, 6-8 hours minimum. Heads track the sun throughout the day.",
       soilPH: "6.0-7.5 pH. Tolerates various soils but prefers well-draining.",
       fertilizer: "Light feeding at planting. Too much nitrogen produces foliage over flowers."
     },
     steps: [
       { id: 1, title: "Choose Location", description: "Select full sun spot protected from strong winds", completed: false, required: true, icon: Sun },
       { id: 2, title: "Prepare Soil", description: "Loosen soil 2 feet deep, mix in compost", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Sow Seeds Directly", description: "Plant seeds 1 inch deep, 6 inches apart after last frost", completed: false, required: true, icon: Plus },
       { id: 4, title: "Water Well", description: "Keep soil moist until germination (7-10 days)", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Thin Seedlings", description: "Thin to 12-24 inches apart depending on variety", completed: false, required: true, icon: Scissors },
       { id: 6, title: "Stake Tall Varieties", description: "Support plants over 3 feet tall with stakes", completed: false, required: false, icon: Plus },
       { id: 7, title: "Protect from Birds", description: "Cover seed heads with netting if saving seeds", completed: false, required: false, icon: Clock },
     ]
   },
   "14": {
     name: "Marigold",
     category: "flowers",
     difficulty: "beginner",
     season: "summer",
     description: "Vibrant, pest-repelling flowers perfect for garden borders. Marigolds bloom continuously and are nearly foolproof for beginners.",
     careTips: {
       water: "Water at base when top inch of soil is dry. Avoid wetting foliage.",
       sunlight: "Full sun, 6+ hours. Tolerates heat and some drought.",
       soilPH: "6.0-7.0 pH. Average, well-draining soil. Too rich = more foliage, fewer flowers.",
       fertilizer: "Light feeding monthly. Marigolds prefer lean soil."
     },
     steps: [
       { id: 1, title: "Choose Planting Time", description: "Start after last frost when soil is warm", completed: false, required: true, icon: Sun },
       { id: 2, title: "Prepare Location", description: "Select full sun spot with average soil", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Sow Seeds or Transplant", description: "Plant seeds 1 inch deep or transplant seedlings", completed: false, required: true, icon: Plus },
       { id: 4, title: "Space Properly", description: "Space 8-18 inches apart based on variety", completed: false, required: true, icon: Plus },
       { id: 5, title: "Water to Establish", description: "Keep moist until established, then reduce watering", completed: false, required: true, icon: Droplets },
       { id: 6, title: "Deadhead Regularly", description: "Remove spent blooms to encourage more flowers", completed: false, required: false, icon: Scissors },
     ]
   },
   "15": {
     name: "Jasmine",
     category: "flowers",
     difficulty: "intermediate",
     season: "spring",
     description: "Intensely fragrant climbing vine with star-shaped flowers. Jasmine perfumes entire gardens and attracts night pollinators.",
     careTips: {
       water: "Keep soil consistently moist but not waterlogged. Reduce in winter.",
       sunlight: "Full sun to partial shade, 4-6 hours of direct sun.",
       soilPH: "6.0-7.0 pH. Rich, well-draining soil with organic matter.",
       fertilizer: "Feed monthly during growing season with balanced fertilizer."
     },
     steps: [
       { id: 1, title: "Select Planting Site", description: "Choose location with support structure for climbing", completed: false, required: true, icon: Sun },
       { id: 2, title: "Install Support", description: "Add trellis, arbor, or fence for vine to climb", completed: false, required: true, icon: Plus },
       { id: 3, title: "Prepare Soil", description: "Amend with compost, ensure excellent drainage", completed: false, required: true, icon: Thermometer },
       { id: 4, title: "Plant Jasmine", description: "Plant at same depth as nursery pot near support", completed: false, required: true, icon: Plus },
       { id: 5, title: "Water Thoroughly", description: "Keep soil moist, especially during establishment", completed: false, required: true, icon: Droplets },
       { id: 6, title: "Train Vines", description: "Guide young vines onto support structure", completed: false, required: true, icon: Scissors },
       { id: 7, title: "Prune After Flowering", description: "Shape and control size after bloom period ends", completed: false, required: false, icon: Scissors },
     ]
   },
   "16": {
     name: "Hibiscus",
     category: "flowers",
     difficulty: "intermediate",
     season: "summer",
     description: "Tropical showstopper with dinner-plate sized blooms. Hibiscus brings exotic beauty to gardens and attracts hummingbirds.",
     careTips: {
       water: "Water deeply when top inch is dry. More frequent in hot weather.",
       sunlight: "Full sun, 6-8 hours for best flowering. Some afternoon shade in hot climates.",
       soilPH: "6.0-7.0 pH. Rich, well-draining soil with consistent moisture.",
       fertilizer: "Feed every 2 weeks during growing season with high-potassium fertilizer."
     },
     steps: [
       { id: 1, title: "Choose Location", description: "Select warm, sunny spot protected from wind", completed: false, required: true, icon: Sun },
       { id: 2, title: "Prepare Rich Soil", description: "Mix compost and ensure good drainage", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Plant Hibiscus", description: "Plant at same depth as container, water well", completed: false, required: true, icon: Plus },
       { id: 4, title: "Mulch Around Base", description: "Apply 2-3 inches of mulch, keeping away from stem", completed: false, required: true, icon: Thermometer },
       { id: 5, title: "Establish Watering", description: "Water deeply and consistently during establishment", completed: false, required: true, icon: Droplets },
       { id: 6, title: "Begin Fertilizing", description: "Start feeding after plant is established", completed: false, required: false, icon: Clock },
       { id: 7, title: "Prune in Spring", description: "Cut back by 1/3 in early spring to encourage bushy growth", completed: false, required: false, icon: Scissors },
     ]
   },
   "17": {
     name: "Petunia",
     category: "flowers",
     difficulty: "beginner",
     season: "summer",
     description: "Prolific bloomers perfect for containers and hanging baskets. Petunias provide continuous color with minimal care.",
     careTips: {
       water: "Water when top inch is dry. Daily watering may be needed for containers.",
       sunlight: "Full sun, 6+ hours for best blooming. Tolerates partial shade.",
       soilPH: "6.0-7.0 pH. Light, well-draining potting mix.",
       fertilizer: "Feed weekly with liquid fertilizer for continuous blooms."
     },
     steps: [
       { id: 1, title: "Choose Container/Location", description: "Select hanging basket, container, or garden bed", completed: false, required: true, icon: Sun },
       { id: 2, title: "Prepare Soil", description: "Use light, well-draining potting mix", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Plant Petunias", description: "Space 12 inches apart in beds, closer in containers", completed: false, required: true, icon: Plus },
       { id: 4, title: "Water Thoroughly", description: "Water deeply at planting, keep soil moist", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Pinch Growing Tips", description: "Pinch back when 6 inches tall for bushier plants", completed: false, required: true, icon: Scissors },
       { id: 6, title: "Deadhead Spent Blooms", description: "Remove faded flowers to encourage more blooms", completed: false, required: false, icon: Scissors },
       { id: 7, title: "Cut Back Mid-Season", description: "Trim by half if plants become leggy", completed: false, required: false, icon: Scissors },
     ]
   },
   "18": {
     name: "Daisy",
     category: "flowers",
     difficulty: "beginner",
     season: "spring",
     description: "Classic cheerful flowers symbolizing innocence. Daisies are low-maintenance, drought-tolerant, and bloom prolifically.",
     careTips: {
       water: "Water moderately, allowing soil to dry between waterings. Drought tolerant once established.",
       sunlight: "Full sun to partial shade, 6+ hours preferred.",
       soilPH: "6.0-8.0 pH. Adaptable to various soils with good drainage.",
       fertilizer: "Light feeding in spring. Rich soil reduces flowering."
     },
     steps: [
       { id: 1, title: "Choose Variety", description: "Select Shasta, Gerbera, or other daisy variety for your climate", completed: false, required: true, icon: Sun },
       { id: 2, title: "Prepare Planting Area", description: "Ensure well-draining soil, amend if heavy clay", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Plant Daisies", description: "Space 12-24 inches apart depending on variety", completed: false, required: true, icon: Plus },
       { id: 4, title: "Water to Establish", description: "Water regularly until roots are established", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Apply Light Mulch", description: "Mulch to retain moisture and suppress weeds", completed: false, required: true, icon: Thermometer },
       { id: 6, title: "Deadhead Flowers", description: "Remove spent blooms for extended flowering", completed: false, required: false, icon: Scissors },
       { id: 7, title: "Divide Clumps", description: "Divide every 2-3 years to maintain vigor", completed: false, required: false, icon: Clock },
     ]
   },
 
   // HERBS
   "3": {
     name: "Basil",
     category: "herbs",
     difficulty: "beginner",
     season: "summer",
     description: "A fragrant culinary herb that's easy to grow and essential for Italian cooking. Basil thrives in warm conditions and produces abundantly with regular harvesting.",
     careTips: {
       water: "Water when top inch of soil is dry. Keep soil consistently moist but never soggy.",
       sunlight: "6-8 hours of direct sunlight daily. Can tolerate partial afternoon shade in hot climates.",
       soilPH: "6.0-7.0 pH. Rich, well-draining soil with good organic matter.",
       fertilizer: "Light feeding every 4-6 weeks with balanced liquid fertilizer."
     },
     steps: [
       { id: 1, title: "Choose Container/Location", description: "Select a pot with drainage or sunny garden spot", completed: false, required: true, icon: Sun },
       { id: 2, title: "Prepare Soil", description: "Use well-draining potting mix rich in organic matter", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Plant Seeds or Seedlings", description: "Sow seeds 1/4 inch deep or transplant seedlings after frost", completed: false, required: true, icon: Plus },
       { id: 4, title: "Initial Watering", description: "Water gently and keep soil moist until established", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Thin Seedlings", description: "Space plants 6-12 inches apart for air circulation", completed: false, required: true, icon: Scissors },
       { id: 6, title: "Pinch Growing Tips", description: "Pinch off flower buds and top leaves to encourage bushiness", completed: false, required: true, icon: Scissors },
       { id: 7, title: "Regular Harvesting", description: "Harvest leaves regularly from the top to promote growth", completed: false, required: false, icon: Scissors },
       { id: 8, title: "Monitor for Pests", description: "Check for aphids and remove by hand or with water spray", completed: false, required: false, icon: Clock },
     ]
   },
   "6": {
     name: "Mint",
     category: "herbs",
     difficulty: "beginner",
     season: "all",
     description: "Vigorous aromatic herb perfect for teas, cocktails, and cooking. Mint is extremely easy to grow but spreads aggressively - best grown in containers.",
     careTips: {
       water: "Keep soil consistently moist. Mint loves water but needs good drainage.",
       sunlight: "Partial shade to full sun. Prefers morning sun with afternoon shade in hot climates.",
       soilPH: "6.0-7.0 pH. Rich, moist soil with good organic matter.",
       fertilizer: "Light feeding in spring with balanced fertilizer. Too much nitrogen reduces flavor."
     },
     steps: [
       { id: 1, title: "Choose Container", description: "Use large pot with drainage to prevent spreading - mint is invasive!", completed: false, required: true, icon: Plus },
       { id: 2, title: "Prepare Soil", description: "Fill with rich, well-draining potting mix", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Plant Mint", description: "Plant seedling or cutting 1-2 inches deep in container", completed: false, required: true, icon: Plus },
       { id: 4, title: "Water Thoroughly", description: "Keep soil consistently moist, water when top feels slightly dry", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Position Container", description: "Place in partial shade to full sun location", completed: false, required: true, icon: Sun },
       { id: 6, title: "Pinch Flower Buds", description: "Remove flowers to maintain leaf flavor and encourage bushiness", completed: false, required: true, icon: Scissors },
       { id: 7, title: "Regular Harvesting", description: "Harvest leaves frequently to promote new growth", completed: false, required: false, icon: Scissors },
       { id: 8, title: "Divide Annually", description: "Repot or divide plants annually to maintain vigor", completed: false, required: false, icon: Clock },
     ]
   },
   "19": {
     name: "Coriander",
     category: "herbs",
     difficulty: "intermediate",
     season: "spring",
     description: "Dual-purpose herb providing both fresh cilantro leaves and coriander seeds. Bolts quickly in heat, so succession planting is key.",
     careTips: {
       water: "Keep soil evenly moist. Stress from drying causes bolting.",
       sunlight: "Full sun to partial shade, 4-6 hours. Afternoon shade in hot climates.",
       soilPH: "6.2-6.8 pH. Light, well-draining soil with good organic content.",
       fertilizer: "Light feeding with nitrogen-rich fertilizer for leaf production."
     },
     steps: [
       { id: 1, title: "Choose Cool Location", description: "Select spot with afternoon shade in warm climates", completed: false, required: true, icon: Sun },
       { id: 2, title: "Sow Seeds Directly", description: "Plant seeds 1/4 inch deep, coriander doesn't transplant well", completed: false, required: true, icon: Plus },
       { id: 3, title: "Space Seeds", description: "Scatter seeds 1 inch apart in rows 12 inches apart", completed: false, required: true, icon: Plus },
       { id: 4, title: "Keep Moist", description: "Water regularly, never let soil dry completely", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Thin Seedlings", description: "Thin to 4-6 inches apart when 2 inches tall", completed: false, required: true, icon: Scissors },
       { id: 6, title: "Succession Planting", description: "Sow new seeds every 2-3 weeks for continuous harvest", completed: false, required: false, icon: Clock },
       { id: 7, title: "Harvest Leaves", description: "Cut outer leaves when plants are 6 inches tall", completed: false, required: false, icon: Scissors },
     ]
   },
   "20": {
     name: "Curry Leaves",
     category: "herbs",
     difficulty: "intermediate",
     season: "all",
     description: "Essential aromatic herb in South Asian cooking. Curry leaf trees are perennial and provide fresh leaves year-round in warm climates.",
     careTips: {
       water: "Water when top inch is dry. Reduce in winter but don't let dry completely.",
       sunlight: "Full sun, 6+ hours. Protect from frost.",
       soilPH: "6.0-7.0 pH. Well-draining, fertile soil.",
       fertilizer: "Feed monthly during growing season with balanced fertilizer."
     },
     steps: [
       { id: 1, title: "Choose Container/Location", description: "Plant in pot for cold climates (bring indoors) or ground in tropical areas", completed: false, required: true, icon: Sun },
       { id: 2, title: "Prepare Rich Soil", description: "Use well-draining potting mix with compost", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Plant Tree", description: "Plant at same depth as nursery container", completed: false, required: true, icon: Plus },
       { id: 4, title: "Water Thoroughly", description: "Water deeply after planting, keep moist while establishing", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Position in Full Sun", description: "Place in warmest, sunniest location available", completed: false, required: true, icon: Sun },
       { id: 6, title: "Prune for Bushiness", description: "Pinch tips to encourage branching and more leaves", completed: false, required: false, icon: Scissors },
       { id: 7, title: "Winter Protection", description: "Bring indoors or protect from frost in cold climates", completed: false, required: false, icon: Clock },
     ]
   },
   "21": {
     name: "Parsley",
     category: "herbs",
     difficulty: "beginner",
     season: "spring",
     description: "Versatile biennial herb with flat or curly leaves. Parsley is nutrient-rich and adds fresh flavor to countless dishes.",
     careTips: {
       water: "Keep soil evenly moist but not waterlogged.",
       sunlight: "Full sun to partial shade, 4-6 hours of direct light.",
       soilPH: "6.0-7.0 pH. Rich, well-draining soil with organic matter.",
       fertilizer: "Feed every 4-6 weeks with balanced liquid fertilizer."
     },
     steps: [
       { id: 1, title: "Soak Seeds", description: "Soak seeds overnight to speed slow germination", completed: false, required: true, icon: Droplets },
       { id: 2, title: "Prepare Container/Bed", description: "Choose pot with drainage or garden spot", completed: false, required: true, icon: Plus },
       { id: 3, title: "Sow Seeds Shallowly", description: "Press seeds into soil surface, barely cover", completed: false, required: true, icon: Plus },
       { id: 4, title: "Keep Moist", description: "Mist daily until germination (2-4 weeks)", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Thin Seedlings", description: "Thin to 6-8 inches apart when established", completed: false, required: true, icon: Scissors },
       { id: 6, title: "Harvest Outer Stems", description: "Cut outer stems at base, leaving center to grow", completed: false, required: false, icon: Scissors },
     ]
   },
   "22": {
     name: "Thyme",
     category: "herbs",
     difficulty: "beginner",
     season: "spring",
     description: "Hardy Mediterranean herb with tiny aromatic leaves. Thyme is drought-tolerant, deer-resistant, and perfect for rock gardens.",
     careTips: {
       water: "Water when soil is completely dry. Prefers drier conditions.",
       sunlight: "Full sun, 6-8 hours. Needs good air circulation.",
       soilPH: "6.0-8.0 pH. Sandy, well-draining soil. Avoid rich, wet conditions.",
       fertilizer: "Minimal feeding needed. Light compost in spring is sufficient."
     },
     steps: [
       { id: 1, title: "Select Sunny Location", description: "Choose hot, sunny spot with excellent drainage", completed: false, required: true, icon: Sun },
       { id: 2, title: "Prepare Sandy Soil", description: "Add sand to heavy soil for drainage", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Plant Thyme", description: "Space plants 12-24 inches apart", completed: false, required: true, icon: Plus },
       { id: 4, title: "Water Lightly", description: "Water sparingly after planting, let soil dry between", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Add Gravel Mulch", description: "Use gravel or stones around base to improve drainage", completed: false, required: true, icon: Thermometer },
       { id: 6, title: "Harvest Regularly", description: "Snip sprigs as needed, promotes bushy growth", completed: false, required: false, icon: Scissors },
       { id: 7, title: "Prune After Flowering", description: "Cut back by 1/3 after flowering to maintain shape", completed: false, required: false, icon: Scissors },
     ]
   },
   "23": {
     name: "Oregano",
     category: "herbs",
     difficulty: "beginner",
     season: "spring",
     description: "Robust Mediterranean herb essential for pizza and pasta. Oregano is drought-tolerant and spreads to create fragrant ground cover.",
     careTips: {
       water: "Water when soil is dry. Drought-tolerant once established.",
       sunlight: "Full sun, 6-8 hours for best flavor. More sun = stronger taste.",
       soilPH: "6.0-8.0 pH. Light, well-draining soil. Thrives in poor soil.",
       fertilizer: "Avoid fertilizing - lean soil produces more flavorful leaves."
     },
     steps: [
       { id: 1, title: "Choose Sunny Location", description: "Select hot, dry spot with full sun", completed: false, required: true, icon: Sun },
       { id: 2, title: "Prepare Light Soil", description: "Ensure excellent drainage, add sand if needed", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Plant Oregano", description: "Space plants 12-18 inches apart", completed: false, required: true, icon: Plus },
       { id: 4, title: "Water Sparingly", description: "Water only when soil is completely dry", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Pinch Tips", description: "Pinch growing tips when 4 inches tall for bushier plants", completed: false, required: true, icon: Scissors },
       { id: 6, title: "Harvest Before Flowering", description: "Snip leaves before flower buds open for best flavor", completed: false, required: false, icon: Scissors },
       { id: 7, title: "Cut Back Hard", description: "Cut back to ground in fall in cold climates", completed: false, required: false, icon: Scissors },
     ]
   },
   "24": {
     name: "Rosemary",
     category: "herbs",
     difficulty: "intermediate",
     season: "spring",
     description: "Fragrant evergreen herb with needle-like leaves. Rosemary is drought-tolerant and can be shaped into topiaries or hedges.",
     careTips: {
       water: "Water when soil is completely dry. Overwatering is the main killer.",
       sunlight: "Full sun, 6-8 hours minimum. Needs excellent light.",
       soilPH: "6.0-7.0 pH. Sandy, well-draining soil is essential.",
       fertilizer: "Very light feeding in spring. Rich soil weakens the plant."
     },
     steps: [
       { id: 1, title: "Select Perfect Spot", description: "Choose sunniest location with excellent drainage", completed: false, required: true, icon: Sun },
       { id: 2, title: "Improve Drainage", description: "Add sand or gravel to soil, or use raised bed", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Plant Rosemary", description: "Plant at same depth as container, space 2-3 feet apart", completed: false, required: true, icon: Plus },
       { id: 4, title: "Water to Establish", description: "Water regularly first month, then reduce dramatically", completed: false, required: true, icon: Droplets },
       { id: 5, title: "Add Gravel Mulch", description: "Use stones or gravel around base for drainage", completed: false, required: true, icon: Thermometer },
       { id: 6, title: "Shape Plant", description: "Prune lightly after flowering to maintain shape", completed: false, required: false, icon: Scissors },
       { id: 7, title: "Winter Protection", description: "Protect from frost or bring container indoors", completed: false, required: false, icon: Clock },
     ]
   },
 
   // INDOOR PLANTS
   "4": {
     name: "Snake Plant",
     category: "indoor",
     difficulty: "beginner",
     season: "all",
     description: "One of the most tolerant houseplants, perfect for beginners. Snake plants purify air, thrive on neglect, and add striking vertical interest to any room.",
     careTips: {
       water: "Water every 2-6 weeks, allowing soil to dry completely between waterings. Less in winter.",
       sunlight: "Tolerates low to bright indirect light. Avoid direct hot sun which can scorch leaves.",
       soilPH: "5.5-7.5 pH. Well-draining cactus or succulent mix works best.",
       fertilizer: "Feed monthly during spring and summer with diluted all-purpose fertilizer."
     },
     steps: [
       { id: 1, title: "Select Location", description: "Choose spot with indirect light, away from cold drafts", completed: false, required: true, icon: Sun },
       { id: 2, title: "Choose Container", description: "Use pot with drainage holes, slightly larger than root ball", completed: false, required: true, icon: Plus },
       { id: 3, title: "Prepare Soil Mix", description: "Use well-draining cactus/succulent mix or add perlite to potting soil", completed: false, required: true, icon: Thermometer },
       { id: 4, title: "Plant Snake Plant", description: "Place at same depth as original pot, firm soil gently", completed: false, required: true, icon: Plus },
       { id: 5, title: "Initial Watering", description: "Water lightly after planting, then wait 1-2 weeks before next watering", completed: false, required: true, icon: Droplets },
       { id: 6, title: "Establish Watering Schedule", description: "Check soil moisture with finger before watering, only when completely dry", completed: false, required: false, icon: Droplets },
       { id: 7, title: "Dust Leaves", description: "Wipe leaves monthly with damp cloth to remove dust", completed: false, required: false, icon: Scissors },
       { id: 8, title: "Rotate Plant", description: "Turn plant quarterly for even growth", completed: false, required: false, icon: Clock },
     ]
   },
   "25": {
     name: "Money Plant",
     category: "indoor",
     difficulty: "beginner",
     season: "all",
     description: "Popular trailing vine also known as Pothos or Devil's Ivy. Money plants are nearly indestructible and purify indoor air effectively.",
     careTips: {
       water: "Water when top inch of soil is dry. Tolerates irregular watering.",
       sunlight: "Low to bright indirect light. Variegated types need more light.",
       soilPH: "6.1-6.5 pH. Standard potting mix with good drainage.",
       fertilizer: "Feed monthly during growing season with balanced liquid fertilizer."
     },
     steps: [
       { id: 1, title: "Choose Display Style", description: "Decide on hanging basket, climbing pole, or tabletop pot", completed: false, required: true, icon: Plus },
       { id: 2, title: "Select Container", description: "Use pot with drainage holes appropriate for display style", completed: false, required: true, icon: Plus },
       { id: 3, title: "Prepare Potting Mix", description: "Use standard potting mix with perlite for drainage", completed: false, required: true, icon: Thermometer },
       { id: 4, title: "Plant Money Plant", description: "Plant cutting or nursery plant at same depth", completed: false, required: true, icon: Plus },
       { id: 5, title: "Water Thoroughly", description: "Water until it drains from bottom, let dry between waterings", completed: false, required: true, icon: Droplets },
       { id: 6, title: "Position in Indirect Light", description: "Place in bright indirect light for best growth", completed: false, required: true, icon: Sun },
       { id: 7, title: "Prune for Fullness", description: "Trim long vines to encourage bushier growth", completed: false, required: false, icon: Scissors },
       { id: 8, title: "Propagate Cuttings", description: "Root stem cuttings in water to create new plants", completed: false, required: false, icon: Plus },
     ]
   },
   "26": {
     name: "Aloe Vera",
     category: "indoor",
     difficulty: "beginner",
     season: "all",
     description: "Medicinal succulent with healing gel inside leaves. Aloe vera is low-maintenance and provides natural remedy for burns and skin issues.",
     careTips: {
       water: "Water deeply but infrequently. Allow soil to dry completely, every 2-3 weeks.",
       sunlight: "Bright indirect light. Some direct morning sun is beneficial.",
       soilPH: "7.0-8.5 pH. Sandy, well-draining cactus mix.",
       fertilizer: "Feed once in spring with diluted succulent fertilizer."
     },
     steps: [
       { id: 1, title: "Select Bright Location", description: "Choose spot with bright indirect light near window", completed: false, required: true, icon: Sun },
       { id: 2, title: "Choose Terra Cotta Pot", description: "Use unglazed clay pot with drainage for moisture control", completed: false, required: true, icon: Plus },
       { id: 3, title: "Prepare Succulent Mix", description: "Use cactus/succulent soil or add sand to potting mix", completed: false, required: true, icon: Thermometer },
       { id: 4, title: "Plant Aloe", description: "Plant with base of leaves above soil line", completed: false, required: true, icon: Plus },
       { id: 5, title: "Wait to Water", description: "Don't water for first week after planting to prevent rot", completed: false, required: true, icon: Clock },
       { id: 6, title: "Establish Watering Routine", description: "Water deeply every 2-3 weeks, less in winter", completed: false, required: false, icon: Droplets },
       { id: 7, title: "Remove Pups", description: "Separate baby plants when they have 3-4 leaves", completed: false, required: false, icon: Scissors },
     ]
   },
   "27": {
     name: "Peace Lily",
     category: "indoor",
     difficulty: "beginner",
     season: "all",
     description: "Elegant flowering houseplant with white spathes. Peace lilies thrive in low light and signal when they need water by drooping.",
     careTips: {
       water: "Water when leaves start to droop slightly. Keep soil lightly moist.",
       sunlight: "Low to medium indirect light. No direct sun which burns leaves.",
       soilPH: "5.8-6.5 pH. Rich, well-draining potting mix.",
       fertilizer: "Feed monthly in spring and summer with balanced fertilizer."
     },
     steps: [
       { id: 1, title: "Choose Low-Light Location", description: "Select spot with indirect light away from windows", completed: false, required: true, icon: Sun },
       { id: 2, title: "Select Appropriate Pot", description: "Use pot with drainage, peace lilies like to be slightly rootbound", completed: false, required: true, icon: Plus },
       { id: 3, title: "Prepare Rich Soil", description: "Use quality potting mix with peat and perlite", completed: false, required: true, icon: Thermometer },
       { id: 4, title: "Plant Peace Lily", description: "Plant at same depth as original container", completed: false, required: true, icon: Plus },
       { id: 5, title: "Water Thoroughly", description: "Water well after planting, keep soil lightly moist", completed: false, required: true, icon: Droplets },
       { id: 6, title: "Increase Humidity", description: "Mist leaves or use pebble tray for humidity", completed: false, required: false, icon: Droplets },
       { id: 7, title: "Remove Spent Flowers", description: "Cut brown flower stalks at base", completed: false, required: false, icon: Scissors },
     ]
   },
   "28": {
     name: "Spider Plant",
     category: "indoor",
     difficulty: "beginner",
     season: "all",
     description: "Classic houseplant with arching striped leaves and baby plantlets. Spider plants are nearly impossible to kill and excellent air purifiers.",
     careTips: {
       water: "Water when top inch is dry. Brown tips indicate inconsistent watering or fluoride sensitivity.",
       sunlight: "Bright indirect light. Tolerates low light but variegation fades.",
       soilPH: "6.0-7.2 pH. Standard well-draining potting mix.",
       fertilizer: "Feed monthly in spring and summer. Reduce in fall and winter."
     },
     steps: [
       { id: 1, title: "Choose Hanging Location", description: "Select bright spot for hanging basket or high shelf", completed: false, required: true, icon: Sun },
       { id: 2, title: "Select Container", description: "Use hanging basket or pot with drainage", completed: false, required: true, icon: Plus },
       { id: 3, title: "Prepare Potting Mix", description: "Use standard potting mix with good drainage", completed: false, required: true, icon: Thermometer },
       { id: 4, title: "Plant Spider Plant", description: "Plant at same depth, allowing room for tubers", completed: false, required: true, icon: Plus },
       { id: 5, title: "Water Evenly", description: "Use filtered or distilled water to prevent brown tips", completed: false, required: true, icon: Droplets },
       { id: 6, title: "Let Babies Develop", description: "Allow plantlets to grow on runners before propagating", completed: false, required: false, icon: Clock },
       { id: 7, title: "Propagate Spiderettes", description: "Root baby plants in water or soil", completed: false, required: false, icon: Plus },
     ]
   },
   "29": {
     name: "Rubber Plant",
     category: "indoor",
     difficulty: "beginner",
     season: "all",
     description: "Bold tropical plant with large, glossy leaves. Rubber plants make dramatic statement pieces and can grow into impressive indoor trees.",
     careTips: {
       water: "Water when top 1-2 inches are dry. Yellow leaves indicate overwatering.",
       sunlight: "Bright indirect light. Tolerates medium light but growth slows.",
       soilPH: "5.5-7.0 pH. Well-draining potting mix with perlite.",
       fertilizer: "Feed monthly during growing season with balanced liquid fertilizer."
     },
     steps: [
       { id: 1, title: "Select Bright Location", description: "Choose spot with bright indirect light near window", completed: false, required: true, icon: Sun },
       { id: 2, title: "Choose Sturdy Pot", description: "Use heavy pot with drainage to support weight as plant grows", completed: false, required: true, icon: Plus },
       { id: 3, title: "Prepare Well-Draining Mix", description: "Use potting mix with perlite or bark for drainage", completed: false, required: true, icon: Thermometer },
       { id: 4, title: "Plant Rubber Tree", description: "Plant at same depth as nursery pot", completed: false, required: true, icon: Plus },
       { id: 5, title: "Water Carefully", description: "Water thoroughly, let top inches dry between waterings", completed: false, required: true, icon: Droplets },
       { id: 6, title: "Clean Leaves Regularly", description: "Wipe leaves with damp cloth to keep glossy and dust-free", completed: false, required: true, icon: Scissors },
       { id: 7, title: "Prune for Shape", description: "Trim to control height and encourage branching", completed: false, required: false, icon: Scissors },
       { id: 8, title: "Rotate Quarterly", description: "Turn plant for even growth toward light", completed: false, required: false, icon: Clock },
     ]
   },
 
   // OUTDOOR PLANTS
   "5": {
     name: "Lavender",
     category: "outdoor",
     difficulty: "intermediate",
     season: "spring",
     description: "Aromatic Mediterranean herb known for its calming fragrance and beautiful purple blooms. Lavender attracts pollinators and is drought-tolerant once established.",
     careTips: {
       water: "Water deeply but infrequently. Allow soil to dry between waterings. Drought-tolerant once established.",
       sunlight: "Full sun - minimum 6-8 hours daily. The more sun, the more fragrant the blooms.",
       soilPH: "6.5-8.0 pH. Alkaline, lean, and extremely well-draining soil is essential.",
       fertilizer: "Minimal feeding needed. Light compost in spring is sufficient. Avoid nitrogen-rich fertilizers."
     },
     steps: [
       { id: 1, title: "Choose Sunny Location", description: "Select spot with full sun and excellent air circulation", completed: false, required: true, icon: Sun },
       { id: 2, title: "Improve Drainage", description: "Add sand or gravel to heavy soils, or use raised beds", completed: false, required: true, icon: Thermometer },
       { id: 3, title: "Test & Amend Soil pH", description: "Add lime if soil is acidic, lavender prefers alkaline conditions", completed: false, required: true, icon: Thermometer },
       { id: 4, title: "Plant Lavender", description: "Space plants 12-18 inches apart, plant at crown level", completed: false, required: true, icon: Plus },
       { id: 5, title: "Mulch with Gravel", description: "Apply light gravel mulch to improve drainage and reflect heat", completed: false, required: true, icon: Thermometer },
       { id: 6, title: "Initial Watering", description: "Water regularly for first growing season to establish roots", completed: false, required: true, icon: Droplets },
       { id: 7, title: "First Year Pruning", description: "Light trim in first year to encourage bushy growth", completed: false, required: false, icon: Scissors },
       { id: 8, title: "Annual Pruning", description: "Prune by 1/3 after flowering to maintain shape and vigor", completed: false, required: false, icon: Scissors },
     ]
   },
 };
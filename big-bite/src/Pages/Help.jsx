import {
  Flex,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Card,
  Container,
  Image
} from '@chakra-ui/react';

import join_shop from "../images/join_shop.png";
import join_normal from "../images/join_normal.png";
import about_us from "../images/about_us.png";
import icon_megaphone from "../images/icon_megaphone.png";
import about_hero from "../images/about_hero.png";
import contact from "../images/contact.png";

export default function Login() {
return (

<Flex
minH={'200vh'}

bg={useColorModeValue('gray.50', 'gray.800')}>
 <div >
 <Card bg={"white"} w={"242px"} ml={150}  boxShadow='md' h={"242px"}  mt={10}>
<Image src={join_normal} width={"200px"} h={"146px"} ml={6}></Image>
<Container mr={600}><Text fontSize={15} color={"#8d8d8d"} fontWeight={500} textAlign={"center"} mt={6}>Food Lover Sign</Text>
</Container>
</Card>

<Card bg={"white"} w={"242px"}  ml={150} boxShadow='md' h={"242px"}  mt={10}>
<Image src={join_shop} width={"200px"} h={"146px"} ml={6}></Image>
<Container><Text fontSize={15} color={"#8d8d8d"} fontWeight={500}  width={"200px"} mr={"600px"} textAlign={"center"} mt={6}>Restaurant Signup</Text>
</Container>
</Card>

<Card bg={"white"} w={"242px"}  ml={150} boxShadow='md' h={"242px"}  mt={10}>
<Image src={icon_megaphone} width={"200px"} h={"146px"} ml={6}></Image>
<Container><Text fontSize={15} color={"#8d8d8d"} fontWeight={500}  width={"200px"} mr={"600px"} textAlign={"center"} mt={6}>Advertising</Text>
</Container>
</Card>

<Card bg={"white"} w={"242px"}  ml={150} boxShadow='md' h={"242px"}  mt={10}>
<Image src={about_us} width={"200px"} h={"146px"} ml={6}></Image>
<Container><Text fontSize={15} color={"#8d8d8d"} fontWeight={500}  width={"200px"} mr={"600px"} textAlign={"center"} mt={6}>About Kindmeal</Text>
</Container>
</Card>

<Card bg={"white"} w={"242px"}  ml={150} boxShadow='md' h={"242px"} mt={10}>
<Image src={about_hero} width={"200px"} h={"146px"} ml={6}></Image>
<Container><Text fontSize={15} color={"#8d8d8d"} fontWeight={500}  width={"200px"} mr={"600px"} textAlign={"center"} mt={6}>Super Hero Guide</Text>
</Container>
</Card>

<Card bg={"white"} w={"242px"}  ml={150} boxShadow='md' h={"220px"} mt={10}>
<Image src={contact} width={"130px"} h={"130px"} ml={50}></Image>
<Container><Text fontSize={15} color={"#8d8d8d"} fontWeight={500}  width={"200px"} mr={"600px"} textAlign={"center"} mt={6}>Contact Us</Text>
</Container>
</Card>

</div>

<Stack spacing={8}  maxW={'lg'} py={12} px={6} ml={"50px"} mt={"-8px"}>

<Container>
    <Card style={{width:"800px"}}>
    <Heading fontSize={18} textAlign={'left'}>General Help</Heading>
<Text textAlign={"left"} fontSize={"14px"}>Wish to find out more on how to use KindMeal? Please check out our frequently-asked questions below. If you are unable to find your answer here, please contact us for further assistance.</Text>


<Heading textAlign={'left'} fontSize={18}>What is KindMeal?</Heading>
<Text textAlign={"left"}  fontSize={"14px"}>KindMeal is Malaysia's (and possibly the world's!) pioneering meat-free lifestyle platform. We provide an effective platform to promote compassionate dining in a fun and effective way, that would allow you to save precious animal lives, improve your health, enjoy a cleaner environment and of course, save your hard-earned money.</Text>


<Heading textAlign={'left'} fontSize={18}>What is Meat-Free?</Heading>
<Text textAlign={"left"}  fontSize={"14px"}>Meat-free means that the food does not contain any meat, or ingredients derived from meat. However, it may contain some elements that people of certain diet do not consume, such as eggs, dairy / milk, or alcohol. Please refer to the details within each specific shop / deal for further information.</Text>


<Heading textAlign={'left'} fontSize={18} >How do I sign up to KindMeal? Is it free?</Heading>
<Text textAlign={"left"}  fontSize={"14px"}>Yes, it is absolutely free. To join our community of food lovers and grab awesome deals, please sign up here.


If you are a merchant that wish to promote your business for FREE, please proceed to our Businesses Page.</Text>

<Heading textAlign={'left'} fontSize={18}>What is a Username?</Heading>
<Text textAlign={"left"}  fontSize={"14px"}>A Username is a nickname exclusively used to identify your profile. It will be used to access your Public Page, such as https://KindMeal.my/MyUsername, and it will also be displayed when you share KindMoments, comments and reviews.</Text>


<Heading textAlign={'left'} fontSize={18} >How do KindMeal deals work?</Heading>
<Text textAlign={"left"}  fontSize={"14px"}>Restaurants create attractive deals within KindMeal, which you can obtain coupons for. Our coupons differ from other conventional deal sites in that you do not need to make any upfront payment at KindMeal, and you can easily present our LiveCoupon via computer, mobile or laptop without any print coupons. For restaurants that do not require advance reservations, you can even use the LiveCoupon immediately! After all, eating is an impulsive decision, right?</Text>


<Heading textAlign={'left'} fontSize={18}>How do I get a KindMeal coupon?</Heading>
<Text textAlign={"left"}  fontSize={"14px"}>Just browse to a deal you like, select the corresponding outlet location (if the restaurant has multiple locations), then click on Get Coupon. Please note that the outlet location cannot be changed after the coupon is obtained.

Each member is limited to 5 active coupons only. You must use the coupons before you can obtain additional ones. Unused coupons will automatically expire upon reaching its due date.</Text>


<Heading textAlign={'left'} fontSize={18} >What is KindWords?</Heading>
<Text textAlign={"left"}  fontSize={"14px"}>KindWords is a great way to tell your friends about the great food and instantly get more discount.

For deals with KindWords enabled, you can enjoy DOUBLE the discount if you share the deal on Facebook or Twitter. Once you successfully share it, you will immediately receive the exclusive discount for your deal. If you prefer not to take advantage of KindWords, you can still proceed to get the deal at the normal discount price. Please note that not all deals support KindWords - it depends on the merchant.</Text>


<Heading textAlign={'left'} fontSize={18}>How do I use my KindMeal LiveCoupon?</Heading>
<Text textAlign={"left"} fontSize={"14px"}>Once a coupon is received, you can access the LiveCoupon and use it via one of the following ways. An Internet connection is required.
At KindMeal website, under Account - My Coupons section
With our KindMeal mobile app, under Deals - My Coupons section
You should only activate the LiveCoupon when you are at the restaurant, and upon informing the merchant. Some merchants may require that you activate it during the ordering process, while some will be during the payment process. Please inform the merchant first when you are ordering to ensure they are aware of your KindMeal LiveCoupon.

Once an active LiveCoupon is loaded, you will see a timer counting down the time remaining to use it. To activate it, click on Use LiveCoupon. Please ensure that you only activate it upon the request of the merchant. Activating it ahead of time may void your coupon and deal.</Text>


<Heading textAlign={'left'} fontSize={18} >What if I don't have a mobile device or Internet connection, can I use a Print Coupon?</Heading>
<Text textAlign={"left"}  fontSize={"14px"}>This depends on the specific deal. If the merchant allows it, you can also choose to print out the coupon and bring it along. Please refer to the deal's Terms & Conditions to check if print coupons are allowed, and if any prior reservation and usage delay are required.

To print your coupon, first access it via KindMeal website at the Account->Account -> My Coupons section, then click on Print Coupon at the corresponding coupon. If the Print Coupon button is not available, it means that only LiveCoupons are accepted for the deal.</Text>


<Heading textAlign={'left'} fontSize={18} >What is a Print Coupon's Usage Delay?</Heading>
<Text textAlign={"left"}  fontSize={"14px"}>Some merchants may not have the facilities available to verify Print Coupons instantly, so they may impose a Usage Delay of a certain number of days to first print out a cross-checking reference list. If there is a 3-Day delay, it means that you can only use the Print Coupon 3 days after obtaining the coupon.

You may wish to check with the merchant first before using it. We strongly suggest using a LiveCoupon instead, which is immediate with no usage delays.</Text>


<Heading textAlign={'left'} fontSize={18}>How do I create a shop and offer deals?</Heading>
<Text textAlign={"left"}  fontSize={"14px"}>You need to first sign up a merchant account. If you have an existing food lover account, we can upgrade it for you to enable the Merchant functions. To do so, please contact us and tell us more about your shop.

Once your merchant account is activated, you can find out more details at the Merchant Help section.</Text>


<Heading textAlign={'left'} fontSize={18}>Do I need to make any payments to get the deal coupons?</Heading>
<Text textAlign={"left"}  fontSize={"14px"}>No, absolutely no payment is required at KindMeal to obtain your coupon. You will only need to make payment at the restaurant when you use the coupon to purchase your food.</Text>


<Heading textAlign={'left'} fontSize={18} >What is a KindMoment?</Heading>
<Text textAlign={"left"}  fontSize={"14px"}>A KindMoment is a food selfie, a photo moment of your delicious food for sharing with the world, and to encourage meat-free dining. Sharing a KindMoment is extremely quick and easy, similar to other social photo sharing websites or mobile apps.

If you link your KindMeal account with Facebook, you can also automatically publish your latest KindMoments there. On top of that, you can also manually share on Facebook and Twitter.

The public can like and comment on your KindMoments, and you can also edit the KindMoment after publication.</Text>


<Heading textAlign={'left'}fontSize={18}>What is Food Menu?</Heading>
<Text textAlign={"left"}  fontSize={"14px"}>Restaurants can additionally showcase meat-free dishes and menu items. These items are different from deals, and there may not be offers available for them. You can discover interesting new food through our menu listings, and browse the corresponding restaurants for more information. To search for specific types of food or restaurants, go to the search section at the bottom of the page. You can click on a menu item to launch the gallery, where you will have a quick view of the corresponding shop's details. Click into a specific</Text>


<Heading textAlign={'left'} fontSize={18} >What are Superhero Rankings?</Heading>
<Text textAlign={"left"}  fontSize={"14px"}>Superheroes save lives. So can you. By trying out meat-free meals, sharing delicious moments and encouraging friends to do so, you can earn yourself cool Superhero ranks on KindMeal and win awesome prizes! Check out the Superhero Guide for more information.</Text>

</Card>
</Container>
</Stack>


</Flex>
  );
}
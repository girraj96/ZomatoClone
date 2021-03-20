import React, { Component } from 'react'
import { SafeAreaView, StatusBar,Image,Text, View,FlatList, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FoodItemFlat from '../../Components/FoodItemFlat';
import Header from '../../Components/Header'
import SearchBox from '../../Components/SearchBox';
import TagsFlatlist from '../../Components/TagsFlatlist';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import store from '../../redux/store';
import types from '../../redux/types';
import colors from '../../styles/colors';
import { clearUserData } from '../../utils/utils';
import styles from './style';


const {dispatch}=store;


class Home extends Component {

  state={
    tagsAry:[
      {id:1, tagTxt:"Pro"},
      {id:2, tagTxt:"Cuisines"},
      {id:3, tagTxt:"Rating: 4.0+"},
      {id:4, tagTxt:"Fastest Delivery"},
      {id:5, tagTxt:"Offers"},
      {id:6, tagTxt:"Takeaway"}
    ],
    foodItemAry:[
      
      {id:1,itemImg:imagePath.item1,
       foodType:"Special Kabab",restaurantsName:"Pizza, Fast Food",ratingImg:imagePath.ratings,ratingPoint:"4.2", itemPrice:150,itemCount:0},
        {id:2,itemImg:imagePath.item2,
       foodType:"Biryani",restaurantsName:"Pizza, Fast Food",ratingImg:imagePath.ratings,ratingPoint:"3.7",itemPrice:200,itemCount:0},
        {id:3,itemImg:imagePath.item3,
       foodType:"Premium Thali",restaurantsName:"Pizza, Fast Food",ratingImg:imagePath.ratings,ratingPoint:"4.0",itemPrice:100,itemCount:0},
        {id:4,itemImg:imagePath.item4,
       foodType:"Domino's Pizza",restaurantsName:"Pizza, Fast Food",ratingImg:imagePath.ratings,ratingPoint:"4.5",itemPrice:50,itemCount:0},
        {id:5,itemImg:imagePath.item5,
       foodType:"Chowmein",restaurantsName:"Pizza, Fast Food",ratingImg:imagePath.ratings,ratingPoint:"4.0",itemPrice:350,itemCount:0},
        {id:6,itemImg:imagePath.item6,
       foodType:"Kadhayi Panner",restaurantsName:"Pizza, Fast Food",ratingImg:imagePath.ratings,ratingPoint:"4.0",itemPrice:250,itemCount:0},
        
    ],
    banner_img:"https://mir-s3-cdn-cf.behance.net/projects/404/a58360100920621.5f13543704b9f.png",
  }
  

  _onItemClick=(id)=>{

        const {foodItemAry}=this.state;
        let newfoodItemAry=[...foodItemAry];

        let index=newfoodItemAry.findIndex((item)=>item.id===id);

        dispatch({
          type:types.ADD_CART,
          payload:{newfoodItemAry, index}
      })
  }
  onCartClick=()=>{
    const {navigation}=this.props;
    navigation.navigate(navigationStrings.CART_ITEMS)
  }
 

    render() {
      const {tagsAry,banner_img,foodItemAry}=this.state;
        return (
          <WrapperContainer bgColor={colors.white} statusBarColor={colors.white} barStyle={"dark-content"}>
              <Header isLocationVisible={true} onCartClick={this.onCartClick}/>
            <View style={styles.searchBoxView}>
        
            <SearchBox/>
            <View style={styles.tagsFlatlistView}>
              <FlatList
                data={tagsAry}
                horizontal
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=><TagsFlatlist data={item}/>}
              />
            </View>
              <Image source={{uri:banner_img}} style={styles.bannerImg}/>
          <View style={styles.itemFlatList}>
            <FlatList
            data={foodItemAry}
            numColumns={2}
            keyExtractor={(item)=>item.id.toString()}
            ItemSeparatorComponent={()=><View style={{height:10}}></View>}
            renderItem={({item})=><FoodItemFlat data={item} _onItemClick={this._onItemClick}/>}
            showsVerticalScrollIndicator={false}
            />
            
          </View>
            </View>
          </WrapperContainer>
        )
    }
}

export default Home;
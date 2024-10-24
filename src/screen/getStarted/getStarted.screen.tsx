import {Image, Text, View} from 'react-native';
import {styles} from './style';
import Onboarding from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native';

const GetStarted = () => {
  const goTo = useNavigation();

  const handleEnd = () => {
    goTo.navigate('Begin' as never);
  };

  return (
    <Onboarding
      onSkip={handleEnd}
      onDone={handleEnd}
      bottomBarHighlight={false}
      pages={[
        {
          backgroundColor: '#FFFFFF',
          image: <Image />,
          title: (
            <View style={styles.firstScreen}>
              <View style={styles.companyName}>
                <Text style={styles.h1}>
                  Welcome to Touch<Text style={styles.span}>Connect</Text>
                </Text>
                <Text style={styles.slogan}>Connect, Organize, Simplify.</Text>
              </View>
              <Image
                style={styles.img}
                source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/hello.png')}
              />
            </View>
          ),
          subtitle: '',
          titleStyles: styles.slogan,
        },
        {
          backgroundColor: '#FFFFFF',
          image: (
            <Image
              style={styles.img}
              source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/basket.png')}
            />
          ),
          title: (
            <View>
              <Text style={styles.titleScondScreen}>
                Your favorite <Text style={styles.span}>address book</Text>
              </Text>
            </View>
          ),
          subtitle: (
            <View style={styles.secondScreen}>
              <Text style={styles.description}>
                In <Text style={styles.spanDescription}>TouchConnect</Text> you
                can have the contacts you {'\n'}want in the
                <Text style={styles.spanDescription}> easiest</Text>,{' '}
                <Text style={styles.spanDescription}>safest</Text> and{' '}
                <Text style={styles.spanDescription}>fastest</Text> way, {'\n'}
                with a beautiful and intuitive interface.
              </Text>
            </View>
          ),
          titleStyles: styles.slogan,
        },
        {
          backgroundColor: '#FFFFFF',
          image: (
            <Image
              style={styles.img}
              source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/sitComputer.png')}
            />
          ),
          title: (
            <View>
              <Text style={styles.titleScondScreen}>Custom your <Text style={styles.span}>contacts</Text></Text>
            </View>
          ),
          subtitle: (
            <View style={styles.secondScreen}>
              <Text style={styles.description}>
                Save your <Text style={styles.spanDescription}>contacts</Text>{' '}
                with the image, name{'\n'} and nickname of your
                <Text style={styles.spanDescription}> choice</Text>, you can
                {'\n'} also save useful data such as{' '}
                <Text style={styles.spanDescription}>email</Text>
                {'\n'} or <Text style={styles.spanDescription}>address</Text>.
              </Text>
            </View>
          ),
          titleStyles: styles.slogan,
        },
        {
          backgroundColor: '#FFFFFF',
          image: (
            <Image
              style={styles.img}
              source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/stylePorfile.png')}
            />
          ),
          title: (
            <View>
              <Text style={styles.titleScondScreen}>Stylize your <Text style={styles.span}>porfile</Text></Text>
            </View>
          ),
          subtitle: (
            <View style={styles.secondScreen}>
              <Text style={styles.description}>
                Even if no one else can see it, we know you like{'\n'} to see <Text style={styles.spanDescription}>your porfile</Text> in the app you are in, try it!
              </Text>
            </View>
          ),
          titleStyles: styles.slogan,
        },
      ]}
      containerStyles={styles.container}
    />
  );
};

export default GetStarted;

// return (
//   <View style={styles.container}>
//     <View style={styles.header}>
//       <Text style={styles.h1}>
//         Welcome to Touch<Text style={styles.span}>Connect</Text>
//       </Text>

//       <Text style={styles.slogan}>Connect, Organize, Simplify.</Text>
//     </View>

//     <Image
//       source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/hello.png')}
//       style={{width: 500, height: 500}}
//     />

//     <TouchableOpacity style={styles.button}>
//       <Text style={styles.buttonText}>Get Started</Text>
//     </TouchableOpacity>
//   </View>
// );

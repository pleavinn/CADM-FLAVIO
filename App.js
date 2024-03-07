
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ marginTop: 10 }}>
        <View style={{ flexDirection: 'row', gap: 5, padding: 15 }}>
          <Image style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 15,
            resizeMode: "cover",
            backgroundColor: '#fff'
          }}
            source={require('../my-app/assets/profile.png')}>
          </Image>
        </View>
        <View style={{ height: 20 }}></View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 0 }}>
          <Pressable
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: "#202020",
              borderRadius: 4,
              elevation: 3
            }}>
            <LinearGradient colors={["#33006F", "#FFFFFF"]}>
              <Pressable style={{ width: 55, height: 55, justifyContent: "center", alignItems: "center" }}>
                <AntDesign name="heart" size={24} color="white" />
              </Pressable>
            </LinearGradient>

            <Text style={{ color: "white", fontSize: 13 }}>CURTIDAS</Text>
          </Pressable>

          <View style={{
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            flex: 1,
            marginHorizontal: 10,
            marginVertical: 8,
            backgroundColor: "#202020",
            borderRadius: 4,
            elevation: 3
          }}>
            <Image style={{ width: 55, height: 55 }} source={require('../my-app/assets/flower.jpg')}></Image>
            <View>
              <Text style={{ fontSize: 15, color: "white" }}>LAMP</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 0 }}>
          <Pressable
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: "#202020",
              borderRadius: 4,
              elevation: 3
            }}>
            <LinearGradient colors={["#33006F", "#FFFFFF"]}>
              <Image style={{ width: 55, height: 55 }} source={require('../my-app/assets/daily-mix.jpeg')}></Image>
            </LinearGradient>

            <Text style={{ color: "white", fontSize: 13 }}>DAILY RIHANA</Text>
          </Pressable>

          <View style={{
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            flex: 1,
            marginHorizontal: 10,
            marginVertical: 8,
            backgroundColor: "#202020",
            borderRadius: 4,
            elevation: 3
          }}>
            <Image style={{ width: 55, height: 55 }} source={require('../my-app/assets/top-50.jpg')}></Image>
            <View>
              <Text style={{ fontSize: 15, color: "white" }}>VIOLAO</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 0 }}>
          <Pressable
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: "#202020",
              borderRadius: 4,
              elevation: 3
            }}>
            <LinearGradient colors={["#33006F", "#FFFFFF"]}>
              <Image style={{ width: 55, height: 55 }} source={require('../my-app/assets/mega-hiz-mix.jpg')}></Image>
            </LinearGradient>

            <Text style={{ color: "white", fontSize: 13 }}>SLIPMAMIIR</Text>
          </Pressable>

          <View style={{
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            flex: 1,
            marginHorizontal: 10,
            marginVertical: 8,
            backgroundColor: "#202020",
            borderRadius: 4,
            elevation: 3
          }}>
            <Image style={{ width: 55, height: 55 }} source={require('../my-app/assets/drake-Views.jpg')}></Image>
            <View>
              <Text style={{ fontSize: 15, color: "white" }}>KENDRICK LAMAR</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 0 }}>
          <Pressable
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: "#202020",
              borderRadius: 4,
              elevation: 3
            }}>
            <LinearGradient colors={["#33006F", "#FFFFFF"]}>
              <Image style={{ width: 55, height: 55 }} source={require('../my-app/assets/motomami.jpeg')}></Image>
            </LinearGradient>

            <Text style={{ color: "white", fontSize: 13 }}>TLOP Kanye West</Text>
          </Pressable>

          <View style={{
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            flex: 1,
            marginHorizontal: 10,
            marginVertical: 8,
            backgroundColor: "#202020",
            borderRadius: 4,
            elevation: 3
          }}>
            <Image style={{ width: 55, height: 55 }} source={require('../my-app/assets/bin.jpeg')}></Image>
            <View>
              <Text style={{ fontSize: 15, color: "white" }}>TYLER THE CREATOR</Text>
            </View>
          </View>
        </View>

        <Text style={{ color: "white", fontSize: 23, fontWeight: "bold", marginHorizontal: 10, marginTop: 15 }}>PLAYLISTS</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 10 }}>
          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15 }} source={require('../my-app/assets/top-50.jpg')} />
            <Text style={{ width: 120, height: 30, color: 'white', fontSize: 10, fontWeight: '400', marginTop: 10 }}></Text>
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15 }} source={require('../my-app/assets/top-global.jpeg')} />
            <Text style={{ width: 120, height: 30, color: 'white', fontSize: 10, fontWeight: '300', marginTop: 10 }}>tocadas mundial</Text>
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15 }} source={require('../my-app/assets/top-brasil.jpeg')} />
            <Text style={{ width: 120, height: 30, color: 'white', fontSize: 10, fontWeight: '300', marginTop: 10 }}></Text>
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15 }} source={require('../my-app/assets/viral-sp.jpeg')} />
            <Text style={{ width: 120, height: 30, color: 'white', fontSize: 10, fontWeight: '300', marginTop: 10 }}>SPBR</Text>
          </View>
        </ScrollView>

        <Text style={{ color: "white", fontSize: 23, fontWeight: "bold", marginHorizontal: 10, marginTop: 15 }}>LISTEN AGAIN</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 10 }}>
          <View>
            <Image style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 5, marginEnd: 15, borderRadius: 60 }} source={require('../my-app/assets/the-weeknd.jpeg')} />
            <Text style={{ width: 120, height: 20, color: 'white', fontSize: 12, fontWeight: '400', marginTop: 10, marginLeft: 20 }}>MFDOOM</Text>
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15 }} source={require('../my-app/assets/jcole.jpeg')} />
            <Text style={{ width: 120, height: 20, color: 'white', fontSize: 12, fontWeight: '400', marginTop: 10 }}>blackPINK MAIORES</Text>
          </View>

          <View>
            <Image style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 5, marginEnd: 15, borderRadius: 60 }} source={require('../my-app/assets/new-jeans.jpeg')} />
            <Text style={{ width: 120, height: 20, color: 'white', fontSize: 12, fontWeight: '400', marginTop: 10, marginLeft: 20 }}>KANYE WEST</Text>
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15 }} source={require('../my-app/assets/your-right.jpeg')} />
          </View>
        </ScrollView>


        <Text style={{ color: "white", fontSize: 23, fontWeight: "bold", marginHorizontal: 10 }}>PROGRAMAS</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 10 }}>
          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15, borderRadius: 20 }} source={require('../my-app/assets/dev-sem.jpeg')} />
            <Text style={{ width: 120, height: 15, color: '#10BC4C', fontSize: 10, fontWeight: 'bold', marginTop: 10 }}> </Text>
            <Text style={{ width: 120, height: 15, color: 'white', fontSize: 10, fontWeight: '500', marginTop: 2 }}></Text>
            <Text style={{ width: 120, height: 20, color: 'white', fontSize: 10, fontWeight: '300', marginTop: 2 }}></Text>
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15, borderRadius: 20 }} source={require('../my-app/assets/images.jpeg')} />
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15, borderRadius: 20 }} source={require('../my-app/assets/ola-gabs.jpeg')} />
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15, borderRadius: 20 }} source={require('../my-app/assets/estamos-bem.jpeg')} />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    paddingTop: 5

  },
});

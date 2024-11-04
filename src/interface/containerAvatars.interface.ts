import { ImageStyle, StyleProp, ViewStyle } from "react-native";

export interface ContainerAvatarsProps{
    avatars: Avatars[]
    styleContainer: StyleProp<ViewStyle>; 
    styleAvatar: StyleProp<ImageStyle>;
    onPress?: (index: number, img: any) => void;
}

interface Avatars {
    img: any;
}
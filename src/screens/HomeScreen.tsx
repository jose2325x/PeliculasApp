/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';

const { width: windowWidth } = Dimensions.get('screen');

const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();

  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View >
    );
  }

  return (
    <ScrollView>

      <View style={{ marginTop: top + 20 }}>

        {/* Carrusle Principal */}
        <View style={{ height: 440 }}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        {/* Peliculas Populares */}
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="topRated" movies={topRated} />
        <HorizontalSlider title="upComing" movies={upComing} />

      </View >
    </ScrollView>
  );
};

export default HomeScreen;

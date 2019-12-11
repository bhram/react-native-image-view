// @flow
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, I18nManager } from 'react-native';

const HIT_SLOP = { top: 15, left: 15, right: 15, bottom: 15 };

const styles = StyleSheet.create({
    nextButton: {
        position: 'absolute',
        zIndex: 100,
        right: 10,
        top: '50%',
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButton__text: {
        backgroundColor: 'transparent',
        fontSize: 25,
        lineHeight: 25,
        color: '#FFF',
        textAlign: 'center',
        transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }]
    },
});

export default ({ onPress }: { onPress: () => * }) => (
    <TouchableOpacity
        hitSlop={HIT_SLOP}
        style={styles.nextButton}
        onPress={onPress}
    >
        <Text style={styles.nextButton__text}>›</Text>
    </TouchableOpacity>
);

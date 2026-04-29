import FinanceButtonsSection from '@/sections/finance-buttons';
import FinanceHistorySection from '@/sections/finance-history';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function FinanceScreen() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <View style={styles.screen} >
            <View style={styles.header}>
                <Text style={styles.headerText}>Olá, Jonathas</Text>
                
                <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                    <Ionicons 
                        name={isVisible ? "eye-outline" : "eye-off-outline"} 
                        size={24} 
                        color="white" 
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceLabel}>Saldo</Text>
                    {isVisible ? (
                        <Text style={styles.balanceValue}>R$ 12.000,00</Text>
                    ) : (
                        <View style={styles.skeletonValue} />
                    )}
                </View>
                
                <FinanceButtonsSection/>
                <FinanceHistorySection/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#ffffff',
    },
    header: {
        backgroundColor: '#000',
        paddingHorizontal: 20,
        paddingVertical: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    content:{
        padding: 20
    },
    balanceContainer: {
        gap: 4,
        paddingVertical: 16 
    },
    balanceLabel: {
        fontSize:16,
        fontWeight: 600,
        color: '#8a8a8a'
    },
    balanceValue: {
        fontSize: 20,
        fontWeight: 700
    },
    skeletonValue: {
        width: 150,
        height: 22.5,
        backgroundColor: '#e0e0e0',
        marginTop: 4
    },
    actionGrid: {
        paddingHorizontal: 20,
        gap: 12,
        flexDirection: 'row',
        paddingBottom: 20
    },
    actionButton: {
        width: 120,
        gap: 10,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
        alignItems: 'flex-start',
        elevation: 2,
    },
    iconContainer: {
        width: 24,
        height: 24,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionButtonTitle: {
        color: '#333',
        fontWeight: '500',
        fontSize: 13
    },
})
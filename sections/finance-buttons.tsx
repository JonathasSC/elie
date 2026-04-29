import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function FinanceButtonsSection() {
    return (
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.actionGrid}
        >
            <TouchableOpacity style={styles.actionButton}>
                <View style={[styles.iconContainer, { backgroundColor: '#f0f0f0' }]}>
                    <Ionicons name='trending-down' size={16}/>
                </View>
                <Text style={styles.actionButtonTitle}>Gasto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={[styles.iconContainer, { backgroundColor: '#f0f0f0' }]}>
                    <Ionicons name='trending-up' size={16} />
                </View>
                <Text style={styles.actionButtonTitle}>Ganho</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
                <View style={[styles.iconContainer, { backgroundColor: '#f0f0f0' }]}>
                    <Ionicons name='stats-chart' size={16}/>
                </View>
                <Text style={styles.actionButtonTitle}>Investimento</Text>
            </TouchableOpacity>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    actionGrid: {
        gap: 12,
        flexDirection: 'row',
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
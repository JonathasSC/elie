import FinanceItem from '@/components/finance-item';
import { StyleSheet, Text, View } from "react-native";

export default function FinanceHistorySection() {
    return (
        <View>
            <Text style={styles.sectionTitle}>Extrato</Text>
            <View style={styles.list}>

                <FinanceItem 
                    type="expense" 
                    category="Alimentação" 
                    title="Lanche da Tarde" 
                    amount={24.50} 
                />

                <FinanceItem 
                    type="investment" 
                    category="Alimentação" 
                    title="Lanche da Tarde" 
                    amount={24.50} 
                />

                <FinanceItem 
                    type="income" 
                    category="Alimentação" 
                    title="Lanche da Tarde" 
                    amount={24.50} 
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 20,
        fontWeight: 600,
        paddingVertical: 28
    },
    list: {
        gap: 16
    },
})
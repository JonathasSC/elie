import { StyleSheet, Text, View } from "react-native";

interface BalanceCardProps {
  balance: number;
  expense: number;
  income: number;
}

export function BalanceCard(props: BalanceCardProps) {
    const {
        balance = "R$ 0,00",
        income = 0,
        expense = 0,
    } = props;

    return (
        <View style={styles.container}>  
            <View style={styles.balanceContainer}>
                <Text style={styles.label}>Saldo disponível</Text>
                <Text style={styles.balance}>
                R$ {balance || "0,00"}
                </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.row}>
                <View style={styles.item}>
                <Text style={styles.itemLabel}>Entradas</Text>
                <Text style={[styles.value, styles.income]}>
                    + R$ {income.toFixed(2)}
                </Text>
                </View>

                <View style={styles.item}>
                <Text style={styles.itemLabel}>Saídas</Text>
                <Text style={[styles.value, styles.expense]}>
                    - R$ {expense.toFixed(2)}
                </Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5c2be4",
    borderRadius: 16,
    padding: 20,
    gap: 16,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  balanceContainer: {
    gap: 4,
  },

  label: {
    color: "#d1c4ff",
    fontSize: 14,
  },

  balance: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  divider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  item: {
    gap: 2,
  },

  itemLabel: {
    color: "#e0d7ff",
    fontSize: 12,
  },

  value: {
    fontSize: 16,
    fontWeight: "bold",
  },

  income: {
    color: "#4ade80", // verde
  },

  expense: {
    color: "#f87171", // vermelho
  },
});
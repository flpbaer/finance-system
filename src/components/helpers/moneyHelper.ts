export function formatToRealBR(value: number | undefined) {
	return value?.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

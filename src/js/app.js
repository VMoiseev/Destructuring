export default function getSpecials(obj) {
  return obj.special.map((item) => {
    if ('description' in item) {
      return item;
    }
    return { ...item, description: 'Описание недоступно' };
  });
}

const hiddenTypes = ['translation.metadata', 'assist.instruction.context']
export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (item: any) => !hiddenTypes.includes(item.getId()))])

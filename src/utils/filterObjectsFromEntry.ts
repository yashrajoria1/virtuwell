function filterObjectsFromEntry<T>(inputObject: T): T {
  const unWantedProps = [
    'uid',
    '_version',
    'ACL',
    '_in_progress',
    'created_at',
    'created_by',
    'updated_at',
    'updated_by',
    'publish_details',
  ];
  for (const key in inputObject) {
    unWantedProps.includes(key) && delete inputObject[key];
    if (typeof inputObject[key] !== 'object') {
      continue;
    }
    inputObject[key] = filterObjectsFromEntry(inputObject[key]);
  }
  return inputObject;
}

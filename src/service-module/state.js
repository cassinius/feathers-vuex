export default function makeDefaultState (servicePath, options) {
  const {
    idField,
    autoRemove,
    enableEvents,
    addOnUpsert,
    diffOnPatch,
    skipRequestIfExists,
    preferUpdate,
    replaceItems,
    excludeFromGetterQuery
  } = options

  const state = {
    ids: [],
    keyedById: {},
    copiesById: {},
    currentId: null,
    copy: null,
    setCurrentOnGet: true,
    setCurrentOnCreate: true,
    idField,
    servicePath,
    autoRemove,
    enableEvents,
    addOnUpsert,
    diffOnPatch,
    skipRequestIfExists,
    preferUpdate,
    replaceItems,
    pagination: {},
    excludeFromGetterQuery,

    isFindPending: false,
    isGetPending: false,
    isCreatePending: false,
    isUpdatePending: false,
    isPatchPending: false,
    isRemovePending: false,

    errorOnFind: null,
    errorOnGet: null,
    errorOnCreate: null,
    errorOnUpdate: null,
    errorOnPatch: null,
    errorOnRemove: null
  }

  return state
}

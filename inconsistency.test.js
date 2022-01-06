
const undefinedProp = { property: undefined }
const empty = {}

it('does ignore undefined property with toContainEqual', () => {
    expect([empty]).toContainEqual(undefinedProp) // PASS
})

it('does not ignore undefined property with objectContaining', () => {
    expect([empty]).toContainEqual(expect.objectContaining(undefinedProp)) // FAILS
})

it('does not ignore undefined property with toMatchObject', () => {
    expect(empty).toMatchObject(undefinedProp) // FAILS
})
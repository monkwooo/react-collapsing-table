import faker from 'faker';

export const generateFakeData = ({ totalRows }) => {
    let data = [];
    for(let i = 0; i < totalRows; i++) {
        data.push(
            {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.state(),
                country: faker.address.country(),
                zipCode: faker.address.zipCode(),
                bio: faker.lorem.sentence(),
            }
        )
    }

    return data
};

export const getColumns = () => {
    return [
        { accessor: 'firstName', label: 'First Name', priorityLevel: 1, position: 1, minWidth: 150, },
        { accessor: 'lastName', label: 'Last Name', priorityLevel: 2, position: 2, minWidth: 150, },
        { accessor: 'email', label: 'Email', priorityLevel: 3, position: 3, minWidth: 250, },
        { accessor: 'address', label: 'Address', priorityLevel: 4, position: 4, minWidth: 150, },
        { accessor: 'city', label: 'City', priorityLevel: 9, position: 5, minWidth: 120, },
        { accessor: 'state', label: 'State', priorityLevel: 6, position: 6, minWidth: 100, },
        { accessor: 'country', label: 'Country', priorityLevel: 8, position: 7, minWidth: 120, },
        { accessor: 'zipCode', label: 'Zip Code', priorityLevel: 7, position: 8, minWidth: 50, },
        { accessor: 'bio', label: 'Bio', priorityLevel: 5, position: 9, minWidth: 300, },
    ]
};

export const basicTableProps = {
    columns: getColumns(),
    rows: generateFakeData({ totalRows: 1 }),
}

export const defaultColumnSetProps = {
    columns: getColumns(),
    rows: generateFakeData({ totalRows: 1 }),
    defaultSortColumn: 'email',
}

export const sortColumnAndDirectionProps = {
    columns: getColumns(),
    rows: generateFakeData({ totalRows: 1 }),
    column: 'firstName',
    direction: 'ascending',
}

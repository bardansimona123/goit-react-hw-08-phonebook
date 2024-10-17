// src/redux/contactsSlice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../services/api';

export const fetchAllContacts = createAsyncThunk('contacts/fetchAll', async () => {
    const response = await fetchContacts();
    return response;
});

export const createContact = createAsyncThunk('contacts/addContact', async (contact) => {
    const response = await addContact(contact);
    return response;
});

export const removeContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
    await deleteContact(contactId);
    return contactId;
});

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { items: [], filter: '' },
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllContacts.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(createContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(removeContact.fulfilled, (state, action) => {
                state.items = state.items.filter(contact => contact.id !== action.payload);
            });
    },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

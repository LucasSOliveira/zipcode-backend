const QUERY = {
    SELECT_ZIPCODES: 'SELECT * FROM zipecodes ORDER BY created_at',
    SELECT_ZIPCODE: 'SELECT * FROM zipecodedb.zipecodes WHERE cep = ?',
    CREATE_ZIPCODE: 'INSERT INTO zipecodedb.zipecodes(cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    UPDATE_ZIPCODE: 'UPDATE zipecodes SET cep = ?, logradouro = ?, bairro = ?, localidade = ?, uf = ?, complemento = ?, ibge = ?, gia = ?, ddd = ?, siafi = ?',
}

export default QUERY;
import { db } from "../database/db.js";

export const addProd = (req, res) =>{
    const sql = "insert into produto (idCatg, idMarca, nome, descricao, preco, quantidade) values (?, ?, ?, ?, ?, ?)"

    const {idCatg, idMarca, nome, descricao, preco, quantidade} = req.body;

    db.query(sql, [idCatg, idMarca, nome, descricao, preco, quantidade], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição!")
            return res.status(500).json(err);
        } else {
            console.log(`Produto cadastrado com sucesso!`)
            return res.status(200).json(data);
        }
    });
}

export const getProds = (_, res) => {
    const sql = "select p.id, c.id as idCat, c.nome as cat, m.id as idMar, m.nome as mar, p.nome as prod, p.descricao as descr, p.preco as preco, p.quantidade as quant from produto p join categoria c on p.idCatg = c.id join marca m on p.idMarca = m.id"

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição!")
            return res.status(500).json(err);
        } else {
            console.log(`Produtos listados com sucesso!`)
            return res.status(200).json(data);
        }
    });
}

export const updtProd = (req, res) =>{
    const sql = "update produto set idCatg = ?, idMarca = ?, nome = ?, descricao = ?, preco = ?, quantidade = ? where id = ?";

    const {id, cat, mar, prod, descr, preco, quant} = req.body;

    db.query(sql, [cat, mar, prod, descr, preco, quant, id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição!")
            return res.status(500).json(err);
        } else {
            console.log(`Produto alterado com sucesso!`)
            return res.status(200).json(data);
        }
    });
}

export const delProd = (req, res) =>{
    const sql = "delete from produto where id = ?";

    const {id} = req.query;

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição!")
            return res.status(500).json(err);
        } else {
            console.log(`Produto excluído com sucesso!`)
            return res.status(200).json(data);
        }
    });
}
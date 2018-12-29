import React, { Component } from 'react'
import api from '../../services/api'

class Categoria extends Component {
  state = {
    produtos: [],
    categoria: '',
    err: ''
  }

  componentDidMount() {
    const { catId } = this.props.match.params
    this.getProdutos(catId)
  }

  componentWillReceiveProps(newProps) {
    const { catId } = newProps.match.params
    this.getProdutos(catId)
  }

  getProdutos = async id => {
    try {
      const { data: prods } = await api.get(`/produtos?catId=${id}`)
      this.setState({ produtos: prods })
      const { data: cat } = await api.get(`/categorias/${id}`)
      this.setState({ categoria: cat })
    } catch (error) {
      this.setState({ err: 'Erro ao carregar produtos' })
      console.warn(error)
    }
  }

  renderProdutos(produto) {
    return (
      <p className="card card-body bg-light" key={produto.id}>
        {produto.produto}
      </p>
    )
  }

  render() {
    const { produtos, categoria } = this.state
    return (
      <div>
        <h3>{categoria.categoria}</h3>
        {produtos.map(this.renderProdutos)}
      </div>
    )
  }
}

export default Categoria

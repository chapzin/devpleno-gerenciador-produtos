import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import ProdutosHome from '../../components/ProdutosHome'
import Categoria from '../../components/Categoria'
import api from '../../services/api'

class Produtos extends Component {
  state = {
    categorias: [],
    err: ''
  }

  componentDidMount() {
    this.getCategoria()
  }

  getCategoria = async () => {
    try {
      const { data: dados } = await api.get('/categorias')
      this.setState({ categorias: dados })
    } catch (error) {
      this.setState({ err: 'Erro ao carregar as categorias' })
      console.warn(error)
    }
  }

  renderCategoria(cat) {
    return (
      <li key={cat.id}>
        <Link to={`/produtos/categoria/${cat.id}`}>{cat.categoria}</Link>
      </li>
    )
  }

  render() {
    const { match } = this.props
    const { categorias } = this.state
    return (
      <div className="row">
        <div className="col-md-2">
          <h3>Categorias</h3>
          <ul>{categorias.map(this.renderCategoria)}</ul>
        </div>
        <div className="col-md-10">
          <h1>Produtos</h1>
          <Route exact path={match.url} component={ProdutosHome} />
          <Route path={match.url + '/categoria/:catId'} component={Categoria} />
        </div>
      </div>
    )
  }
}

export default Produtos

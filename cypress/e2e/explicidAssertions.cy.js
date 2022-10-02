///<reference types="cypress"/>

it('passes', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    cy.get('.table.table-bordered.assertion-table tr').eq(3).then(cell => {
        expect(cell).to.have.class('success');
        expect(cell).to.have.attr('class');

        //expect(field.attr('class')).to.eq('success');
        //expect(field.attr('class')).to.equal('success');
        //expect(field.attr('class')).to.equals('success');


    })

    const obj = {
        key: 'Dima',
        keyObj: {
            key2: '1'
        }
    }

      const obj2 = {
        key: 'Dima',
        keyObj: {
            key2: '1'
        }
    }

    //expect(obj).to.eq(obj2);
    //expect(obj).to.equal(obj2);
    //expect(obj).to.equals(obj2);

    expect(obj).to.eqls(obj2);
    expect(obj).to.eql(obj2);

    const obj3 = obj;

    expect(obj).to.eq(obj3);
    expect(obj).to.equal(obj3);
    expect(obj).to.equals(obj3);

    expect(obj).to.eqls(obj3);
    expect(obj).to.eql(obj3);
      


    cy.get('.table.table-bordered.assertion-table tr th').eq(5).then(cell => {
        expect(cell).to.contain('3');
        expect(parseFloat(cell.text())).to.be.greaterThan(2);
    })



})

var firstSeatLabel = 1;

$(document).ready(function() {
    var $cart = $('#selected-seats'),
        $counter = $('#counter'),
        $total = $('#total'),
        sc = $('#seat-map').seatCharts({
            map: [
                'ee_eeee_ee',
                '__________',
                'ee_eeee_ee',
                'ee_eeee_ee',
                '__________',
                'ee_eeee_ee',
                'ee_eeee_ee',
                '__________',
                'ee_eeee_ee',
                'ee_eeee_ee',
            ],
            seats: {
                e: {
                    price   : 1,
                    classes : 'normal-sit',
                    category: '座位'
                }

            },
            naming : {
                top : false,
                getLabel : function (character, row, column) {
                    return firstSeatLabel++;
                },
            },
            legend : {
                node : $('#legend'),
                items : [
                    [ 'e', 'available',   '可选座位'],
                    [ 'f', 'unavailable', '已经被预约的座位']
                ]
            },
            click: function () {
                if (this.status() == 'available') {
                    if (parseInt($total.text())) { alert('只能选一个座位。再次点击已选择的座位或者点击右侧的取消预约来取消选择');return 'available';}
                    $('<li>'+this.data().category+this.settings.label+'</b> <a href="#" class="cancel-cart-item">[取消预约]</a></li>')
                        .attr('id', 'cart-item-'+this.settings.id)
                        .data('seatId', this.settings.id)
                        .appendTo($cart);
                    $counter.text(sc.find('selected').length+1);
                    $total.text(recalculateTotal(sc)+this.data().price);


                    return 'selected';
                } else if (this.status() == 'selected') {
                    //更新计数器
                    $counter.text(sc.find('selected').length-1);
                    //更新总数
                    $total.text(recalculateTotal(sc)-this.data().price);

                    //从已选座位中移除
                    $('#cart-item-'+this.settings.id).remove();

                    //更新状态
                    return 'available';
                } else if (this.status() == 'unavailable') {
                    //已经预定的座位
                    return 'unavailable';
                } else {
                    return this.style();
                }
            }
        });

    //取消按钮
    $('#selected-seats').on('click', '.cancel-cart-item', function () {
        sc.get($(this).parents('li:first').data('seatId')).click();
    });

    //已经被预约的座位
    sc.get(['1_2', '4_1', '7_1', '7_2']).status('unavailable');

});

function recalculateTotal(sc) {
    var total = 0;

    //basically find every selected seat and sum its price
    sc.find('selected').each(function () {
        total += this.data().price;
    });

    return total;
}
//提交
function update() {

}
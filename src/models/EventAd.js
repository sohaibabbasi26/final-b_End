module.exports = function EventAd() {
    return {
        checkCityExists:
            "SELECT table_name FROM information_schema.tables  WHERE table_schema LIKE 'public' AND  table_type LIKE 'BASE TABLE' AND table_name like ${tablename};",
        // "SELECT exists(SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename  LIKE ${tablename} );",
        
        getEvents:
            'select distinct  on (a.event_id) m.image_url as "image_thumb ", a.title , a.description , r.average_rating  as "rating"  , COALESCE(\'$\') as "currency_symbol",p.currency ,p.price as "price" , p.discount as "price_old" from ${table:name} a , images m , review r ,price p where a.event_id  = m.event_id  and a.event_id  = r.event_id and a.event_id = p.event_id order by a.event_id ',
    };
};

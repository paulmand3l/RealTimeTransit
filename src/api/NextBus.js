const BASE_URL = "http://webservices.nextbus.com/service/publicJSONFeed"

class NextBusAPI {
  async command(command, params={}) {
    let url = `${BASEURL}?command=${command}`

    for (key in params) {
      let values = params[key];

      if (!values.length) {
        values = [values]
      }

      values.forEach(value => {
        url += `&${key}=${value}`
      }
    }

    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log("Received", data);
      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  getAgencies() {
    return this.command('agencyList')
  }

  routeList(agency) {
    return this.command('routeList', {
      a: agency
    });
  }

  routeConfig(agency, route) {
    return this.command('routeConfig', {
      a: agency,
      r: route,
    });
  }

  predictions(agency, route, stop, useShortTitles) {
    return this.command('predictions', {
      a: agency,
      r: route,
      s: stop,
      useShortTitles
    });
  }

  predictionsForMultiStops(agency, stops, useShortTitles) {
    const formattedStops = stops.map({route, stop} => `${route}|${stop}`);

    return this.command('predictionsForMultiStops', {
      a: agency,
      stops: formattedStops,
      useShortTitles,
    })
  }

  schedule(agency, route) {
    return this.command('schedule', {
      a: agency,
      r: route,
    })
  }

  messages(agency, routes=[]) {
    return this.command('messages', {
      a: agency,
      r: routes,
    })
  }

  async vehicleLocations(agency, route) {
    const lastTime = this.lastTime || 0;

    const data = await this.command('vehicleLocations', {
      a: agency,
      r: route,
      t: lastTime,
    })

    this.lastTime = data.lastTime.time

    return data;
  }

  async vehicleLocation(agency, vehicle) {
    return this.command('vehicleLocation', {
      a: agency,
      v: vehicle
    })
  }
}
